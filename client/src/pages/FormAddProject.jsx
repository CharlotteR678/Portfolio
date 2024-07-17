import { useLoaderData, useNavigate } from "react-router-dom";
import "../css/Form.css";
import { useState } from "react";
import TitleH2Component from "../components/TitleH2Component";

export default function FormAddProject() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [selectedSkills, setSelecteSkills] = useState([]);
  const skills = useLoaderData();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const { title, description } = Object.fromEntries(formData.entries());
      const response = await fetch(`${URL}/project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          selectedSkills,
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

  const handleCheckedSkills = (event) => {
    const skillId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelecteSkills([...selectedSkills, skillId]);
    } else {
      setSelecteSkills(selectedSkills.filter((id) => id !== skillId));
    }
  };

  return (
    <main className="formMain">
      <TitleH2Component title="NOUVEAU PROJET" />
      <form method="post" className="formGobal" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="title">
          NOM
        </label>
        <input className="formInput" type="text" name="title" required />
        <label className="formLabel" htmlFor="description">
          DESCRIPTION
        </label>
        <input className="formInput" type="text" name="description" required />
        <label className="formLabel" htmlFor="Langage utilisé">
          COMPETENCES UTILISEES
        </label>
        {skills.map((skill) => (
          <div key={skill.id}>
            <input
              className="test"
              type="checkbox"
              onChange={handleCheckedSkills}
              value={skill.id}
              name="skills"
            />
            <label htmlFor={skill.id}>{skill.name}</label>
          </div>
        ))}
        <button className="formButton" type="submit">
          ENVOYER
        </button>
      </form>
    </main>
  );
}
