import { useLoaderData } from "react-router-dom";
import ProjetsComponent from "../components/projets/ProjetsComponent";
import "../css/projets/Projets.css";

export default function Projets() {
  const projects = useLoaderData();

  const projectSkills = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.image,
    skills: project.skills.split(" "),
  }));

  return (
    <main id="projectPage">
      <ul id="projectsMap">
        {projectSkills.map((project) => (
          <li key={project.id} className="projectList">
            <ProjetsComponent
              project={project}
              image={project.image}
              skills={projectSkills}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
