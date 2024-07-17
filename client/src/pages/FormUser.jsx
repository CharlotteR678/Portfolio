import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Form.css";

import { AuthContext } from "../UseContext/AuthContext";
import TitleH2Component from "../components/TitleH2Component";

export default function FormUser() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { update, setUpdate } = useContext(AuthContext);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const { name, email, password } = Object.fromEntries(formData.entries());

      const response = await fetch(`${URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        credentials: "include",
      });

      if (response.status !== 201) {
        throw new Error("Failed to create user");
      }
      setUpdate(!update)
      navigate("/admin");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <main className="formMain">
      <TitleH2Component title="NOUVEL UTILISATEUR" />
      <form method="post" className="formGobal" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="name">
          NOM
        </label>
        <input className="formInput" type="text" name="name" required />
        <label className="formLabel" htmlFor="mail">
          MAIL
        </label>
        <input className="formInput" type="email" name="email" required />
        <label className="formLabel" htmlFor="mot de passe">
          MOT DE PASSE
        </label>
        <input className="formInput" type="password" name="password" required />
        <button className="formButton" type="submit">
          AJOUTER UN UTILISATEUR
        </button>
      </form>
    </main>
  );
}
