import { useLoaderData } from "react-router-dom";
import ProjetsComponent from "../components/projets/ProjetsComponent";
import Cretchum from "../assets/images/project/cretchum.png";
import "../css/projets/Projets.css";

export default function Projets() {

  const projects = useLoaderData()

    return (
        <ul id="projectsMap">
          {projects.map((project) => (
            <li key={project.id} className="projectList">
                <ProjetsComponent project={project} image ={Cretchum}/>
            </li>
          ))}
        </ul>
    )
}
