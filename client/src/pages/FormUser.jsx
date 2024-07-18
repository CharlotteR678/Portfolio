import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/Form.css";

import { AuthContext } from "../UseContext/AuthContext";
import TitleH2Component from "../components/TitleH2Component";

export default function FormUser() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { update, setUpdate } = useContext(AuthContext);
  const [passwordForm, setPasswordForm] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

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
      setUpdate(!update);
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
        <input
          className="formInput"
          type="password"
          name="password"
          value={passwordForm}
          onChange={(event) => handleInputChange(event, setPasswordForm)}
          required
        />
        <label className="formLabel" htmlFor="mot de passe">
          VERIFIER LE MOT DE PASSE
        </label>
        <input
          className="formInput"
          type="password"
          name="password"
          value={passwordConf}
          onChange={(event) => handleInputChange(event, setPasswordConf)}
          required
        />
          {passwordForm !== passwordConf && (
            <small>Les mots de passe ne sont pas identiques</small>
          )}
        <button className="formButton" type="submit" disabled={passwordForm !== passwordConf}>
          AJOUTER UN UTILISATEUR
        </button>
      </form>
      <Link to="/connexion" className="LinkForm">
        Déja un compte ? Se connecter{" "}
      </Link>
    </main>
  );
}
