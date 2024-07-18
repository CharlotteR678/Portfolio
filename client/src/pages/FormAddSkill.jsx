import { useNavigate } from "react-router-dom";
import "../css/Form.css";
import TitleH2Component from "../components/TitleH2Component";

export default function FormAddSkill() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const { name } = Object.fromEntries(formData.entries());
      const response = await fetch(`${URL}/skill`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
        credentials: "include",
      });

      if (response.status !== 201) {
        throw new Error("Failed to create user");
      }
      navigate("/admin");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <main className="formMain">
      <TitleH2Component title="NOUVELLE COMPETENCE" />
      <form method="post" className="formGobal" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="title">
          NOM
        </label>
        <input className="formInput" type="text" name="name" required />
        <button className="formButton globallButton" type="submit">
          ENVOYER
        </button>
      </form>
    </main>
  );
}
