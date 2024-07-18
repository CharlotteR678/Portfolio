import { useNavigate, useParams } from "react-router-dom";
import "../css/Form.css";
import TitleH2Component from "../components/TitleH2Component";

export default function FormAddProjectImage() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const response = await fetch(`${URL}/project/image/${id}`, {
        method: "PUT",
        credentials: "include",
        body: formData,
      });
      if (response.status !== 204) {
        throw new Error("Failed to create user");
      }
      navigate("/admin");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <main className="formMain">
      <TitleH2Component title="IMAGE" />
      <form
        onSubmit={handleSubmit}
        className="formGobal"
        encType="multipart/form-data"
        method="post"
      >
        <label className="formLabel" htmlFor="image du projet">
          Choisisser l'image du projet
        </label>
        <input className="formInput" type="file" name="image" required />
        <button className="formButton" type="submit">
          ENVOYER
        </button>
      </form>
    </main>
  );
}
