const { Op } = require("sequelize")
const { Shoes, Category, User } = require("../models") 
const midtransClient = require('midtrans-client');

class ShoesController {
    // PUBLIC SITE
	static async pub_findAll(req, res, next) {
		try {
			let { q } = req.query;
			let option = {
				include: {
					model: Category,
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
				where: {},
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			};
			if (q) option.where.title = { [Op.iLike]: `%${q}%` };
			const data_shoes = await Shoes.findAll(option);
			res.status(200).json(data_shoes);
		} catch (error) {
			next(error);
		}
	}
    // NEED AUTHENTICATION FITUR
	static async findAll(req, res, next) {
		try {
			let { q } = req.query;
			let option = {
				include: {
					model: Category,
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
				where: {},
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			};
			if (q) option.where.title = { [Op.iLike]: `%${q}%` };
			const data_shoes = await Shoes.findAll(option);
			res.status(200).json(data_shoes);
		} catch (error) {
			next(error);
		}
	}
    static async findOne(req, res, next) {
		try {
			const { id } = req.params;
			const data_shoes = await Shoes.findByPk(id);
			if (!data_shoes) throw { name: "NotFound" };

			res.status(200).json(data_shoes);
		} catch (error) {
			next(error);
		}
	}
    static async MidtransToken(req, res, next) {
        
        try {

            const user = await User.findByPk(req.user.id)
            

            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction : false,
                serverKey : process.env.SERVER_KEY,
            });

            let parameter = {
                "transaction_details": {
                    "order_id": "YOUR-ORDERID-" + Math.random() * 100,
                    "gross_amount": 10000
                },
                "credit_card":{
                    "secure" : true
                },
                "customer_details": {
                    
                    "email": user.email,
                    
                }
            };

           const midtransToken = await snap.createTransaction(parameter)
            res.status(201).json({midtransToken})


        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = ShoesController