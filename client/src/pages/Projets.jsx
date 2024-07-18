import { useLoaderData } from "react-router-dom";
import ProjetsComponent from "../components/projets/ProjetsComponent";
import "../css/projets/Projets.css";

export default function Projets() {
  const projects = useLoaderData();
  return (
    <main id="projectPage">
    <ul id="projectsMap">
      {projects.map((project) => (
        <li key={project.id} className="projectList">
          <ProjetsComponent project={project} image={project.image} />
        </li>
      ))}
    </ul>
    </main>
  );
}
