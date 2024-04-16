import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  async function handleCredentialResponse(response) {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3000/google-login",
        headers: {
          google_token: response.credential,
        },
      });

      localStorage.access_token = data.data.token;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "514715861586-t9e35q3vd2e6nh2r33jra94uhtp8vn3s.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    };
  }, []);

  return (
    <div className="flex justify-center ...">
      <div id="buttonDiv"></div>
    </div>
  );
}
