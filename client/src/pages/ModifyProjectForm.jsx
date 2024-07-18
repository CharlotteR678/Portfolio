import { useEffect, useState, useReducer } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import notify from "../../modules/notify";
import "../css/Form.css";

import TitleH2Component from "../components/TitleH2Component";
import PopUp from "../components/Popup";

export default function ModifyProjectForm() {
  const projectData = useLoaderData();
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const [skills, setSkills] = useState(null);
  const [projectSkills, setProjectSkills] = useState(null);
  const [confirmBox, setConfirmBox] = useState(false);
  const [selectedBox, setSelectedBox] = useState([]);

  useEffect(() => {
    const findCommonSkills = () => {
      const CommonSkills = [];
      if (projectSkills !== null && skills !== null) {
        projectSkills.forEach((projectSkill) => {
          const checkIfCommon = skills.find(
            (skill) => skill.id === projectSkill.skill_id
          );
          CommonSkills.push(checkIfCommon.id);
        });
      }
      return CommonSkills;
    };

    const allSkills = findCommonSkills();
    setSelectedBox(allSkills);
  }, [projectSkills, skills]);

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

  useEffect(() => {
    const fetchProjectSkillData = async () => {
      try {
        const response = await fetch(`${URL}/project-skill/${id}`, {
          method: "GET",
          credentials: "include",
        });

        if (response.status !== 200) {
          throw new Error("Failed to fetch skills data");
        }

        const skillData = await response.json();
        setProjectSkills(skillData);
      } catch (err) {
        console.error("Fetch skills error:", err);
      }
    };

    fetchProjectSkillData();
  }, [URL, id]);

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

  // image submit
  const handleImageSubmit = async (event) => {
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
      notify("Image téléchargée avec succès", "success");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Create initial State for the useReducer hook
  const initialState = {
    project: { ...projectData },
  };

  // Create the different actions that will be used in UseReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_PROJECT":
        return { ...state, project: action.payload };
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

  const deleteProject = async () => {
    try {
      const response = await fetch(`${URL}/project/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 204) {
        return console.error("an error occured, try againt later");
      }
      return navigate("/admin");
    } catch (err) {
      return console.error("Fetch error:", err);
    }
  };

  const handleCheckedSkills = (event) => {
    const SkillId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedBox([...selectedBox, SkillId]);
    } else {
      setSelectedBox(
        selectedBox.filter((ididskills) => ididskills !== SkillId)
      );
    }
  };

  return (
    <main className="formMainModify">
      <TitleH2Component title={state.project.title} />
      <PopUp
        text="Êtes-vous sûr de vouloir effectuer cette action ?"
        HandleDelete={deleteProject}
        confirmBox={confirmBox}
        setConfirmBox={setConfirmBox}
      />
      <form
        onSubmit={handleImageSubmit}
        className="formImage"
        encType="multipart/form-data"
        method="post"
      >
        <label className="formLabel" htmlFor="image du projet">
          Choisisser l'image du projet
        </label>
        <input className="formInput" type="file" name="image" required />
        <button className="formButton globallButton" type="submit">
          VALIDER
        </button>
      </form>
      <form method="post" className="formGobalModify" onSubmit={handleSubmit}>
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
                onChange={handleCheckedSkills}
                checked={
                  selectedBox !== null &&
                  selectedBox.some((projectSkill) => projectSkill === skill.id)
                }
              />
              <label htmlFor={skill.id}>{skill.name}</label>
            </div>
          ))}
        <button className="formButton globallButton" type="submit">
          ENVOYER
        </button>
      </form>
    </main>
  );
}
