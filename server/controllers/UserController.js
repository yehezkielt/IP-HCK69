const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
const {User} = require("../models");
const { signToken } = require('../helpers/jwt');

class UserController {

    
    static async googleLogin(req, res, next) {
        try {
            const {google_token} = req.headers
            const ticket = await client.verifyIdToken({
                idToken: google_token,
                audience: "514715861586-t9e35q3vd2e6nh2r33jra94uhtp8vn3s.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            // const userid = payload['sub'];
            // If request specified a G Suite domain:
            // const domain = payload['hd'];
            const [user, created] = await User.findOrCreate({where: {email: payload.email}, default: {username: payload.name, email: payload.email, password: String(Math.random() * 1000000)}})

            const access_token = signToken({id: user.id, email: user.email})
            
            res.status(200).json({access_token})
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = UserController