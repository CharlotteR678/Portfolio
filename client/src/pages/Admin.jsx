import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../UseContext/AuthContext";

import "../css/Admin.css";

import TitleH2Component from "../components/TitleH2Component";

export default function Admin() {
  const URL = import.meta.env.VITE_API_URL;
  const [projectList, setProjectList] = useState([]);
  const [skillList, setSkillList] = useState([]);
  const [projectHidden, setProjectHidden] = useState(false);
  const [skillHidden, setSkillHidden] = useState(false);
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth !== null && auth === false) {
      navigate("/connexion");
    }
  }, [auth, navigate])


  const HandleAddProject = () => {
    navigate("/add-form");
  };

  const HandleAddSkill = () => {
    navigate("/add-skill-form");
  };

  const HandleModifyProject = () => {
    setProjectHidden(!projectHidden);
  };

  const HandleModifySkill = () => {
    setSkillHidden(!skillHidden);
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${URL}/project/`, {
          method: "GET",
          credentials: "include",
        });

        if (response.status !== 200) {
          throw new Error("Failed to fetch profile data");
        }
        const data = await response.json();
        setProjectList(data);
      } catch (err) {
        console.error("Fetch profile error:", err);
      }
    };

    fetchProject();
  }, [URL]);

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await fetch(`${URL}/skill/`, {
          method: "GET",
          credentials: "include",
        });

        if (response.status !== 200) {
          throw new Error("Failed to fetch profile data");
        }
        const data = await response.json();
        setSkillList(data);
      } catch (err) {
        console.error("Fetch profile error:", err);
      }
    };

    fetchSkill();
  }, [URL]);

  return ( 

    <main id="AdminMain">
      <div className="AdminDiv">
        <TitleH2Component title="AJOUTER" />
        <button
          className="AdminButton"
          type="submit"
          onClick={HandleAddProject}
        >
          PROJETS
        </button>
        <button className="AdminButton" type="submit" onClick={HandleAddSkill}>
          COMPETENCES
        </button>
      </div>
      <div className="AdminDiv">
        <TitleH2Component title="MODIFIER / SUPPRIMER" />
        <button
          className={
            projectHidden === false ? "AdminButton" : "AdminButtonVisible"
          }
          type="submit"
          onClick={HandleModifyProject}
        >
          PROJETS
        </button>
        <ul className={projectHidden === false ? "hidden" : "AdminUlVisible"}>
          {projectList.map((project) => (
            <Link to={`/modify-project/${project.id}`} key={project.id}>
              <li className="modifyList">{project.title}</li>
            </Link>
          ))}
        </ul>
        <button
          className={
            skillHidden === false ? "AdminButton" : "AdminButtonVisible"
          }
          type="submit"
          onClick={HandleModifySkill}
        >
          COMPETENCES
        </button>
        <ul className={skillHidden === false ? "hidden" : "AdminUlVisible"}>
          {skillList.map((skill) => (
            <Link to={`/modify-skill/${skill.id}`} key={skill.id}>
              <li className="modifyList">{skill.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
}
