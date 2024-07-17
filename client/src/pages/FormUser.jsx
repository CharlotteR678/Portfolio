import "../css/Form.css";
import { useNavigate } from "react-router-dom";

export default function FormUser() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();


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
      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <main className="formMain">
      <h2 className="formTitle">NOUVEL UTILISATEUR</h2>
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
          AJOUTER UN UTILISATEUT
        </button>
      </form>
    </main>
  );
}
