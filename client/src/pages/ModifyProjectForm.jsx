import { useEffect, useState, useReducer } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../css/Form.css";

import TitleH2Component from "../components/TitleH2Component";
import PopUp from "../components/Popup";

export default function ModifyProjectForm() {
  const projectData = useLoaderData();
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const [skills, setSkills] = useState(null);
  const [confirmBox, setConfirmBox] = useState(false);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const response = await fetch(`${URL}/skill/`, {
          method: "GET",
          credentials: "include",
        });

        if (response.status !== 200) {
          throw new Error("Failed to fetch skills data");
        }

        const skillData = await response.json();
        setSkills(skillData);
      } catch (err) {
        console.error("Fetch skills error:", err);
      }
    };

    fetchSkillData();
  }, [URL]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const title = formData.get("title");
      const description = formData.get("description");
      let selectedSkills = formData.getAll("skills");

      selectedSkills = selectedSkills.map((skill) => parseInt(skill, 10));

      const response = await fetch(`${URL}/project/${id}`, {
        method: "PUT",
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

      if (response.status !== 204) {
        throw new Error("Failed to modify project");
      }
      navigate("/admin");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Create initial State for the useReducer hook
  const initialState = {
    project: { ...projectData },
    beforeChange: { ...projectData },
  };

  // Create the different actions that will be used in UseReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_PROJECT":
        return { ...state, project: action.payload };
      case "SET_BEFORE_CHANGE":
        return { ...state, beforeChange: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChangeadd = (e, champ) => {
    dispatch({
      type: "SET_PROJECT",
      payload: { ...state.project, [champ]: e.target.value },
    });
  };

  const deleteProject = () => {};

  return (
    <main className="formMain">
      <TitleH2Component title={state.project.title} />
      <PopUp
        text="Êtes-vous sûr de vouloir effectuer cette action ?"
        HandleDelete={deleteProject}
        confirmBox={confirmBox}
        setConfirmBox={setConfirmBox}
      />
      <form method="post" className="formGobal" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="title">
          NOM
        </label>
        <input
          className="formInput"
          type="text"
          name="title"
          defaultValue={state.project.title}
          onChange={(e) => onChangeadd(e, "title")}
          required
        />
        <label className="formLabel" htmlFor="description">
          DESCRIPTION
        </label>
        <input
          className="formInput"
          type="text"
          name="description"
          defaultValue={state.project.description}
          onChange={(e) => onChangeadd(e, "description")}
          required
        />
        <label className="formLabel" htmlFor="skills">
          COMPETENCES UTILISEES
        </label>
        {skills !== null &&
          skills.map((skill) => (
            <div key={skill.id}>
              <input
                className="test"
                type="checkbox"
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
