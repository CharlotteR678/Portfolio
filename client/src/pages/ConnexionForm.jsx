import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Form.css";

import { AuthContext } from "../UseContext/AuthContext";

export default function ConnexionForm() {
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_API_URL;
  const { update, setUpdate } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const mail = formData.get("email");
      const password = formData.get("password");
      const response = await fetch(`${URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
        credentials: "include",
      });

      if (response.status === 200) {
        setUpdate(!update)
        return navigate("/admin");
      }
      return { error: "incorrect mail or password" };
    } catch (err) {
      console.error("Login error:", err);
      return {
        error: "An error occurred during login. Please try again later.",
      };
    }
  };
  return (
    <main className="formMain">
      <form
        method="post"
        className="formGobalConnexion"
        onSubmit={handleSubmit}
      >
        <label className="formLabel" htmlFor="mail">
          MAIL
        </label>
        <input className="formInput" type="email" name="email" required />
        <label className="formLabel" htmlFor="mot de passe">
          MOT DE PASSE
        </label>
        <input className="formInput" type="password" name="password" required />
        <button className="formButton globallButton" type="submit">
          CONNEXION
        </button>
      </form>
    </main>
  );
}
