import ProjetsComponent from "../components/projets/ProjetsComponent";
import Cretchum from "../assets/images/project/cretchum.png";
import "../css/projets/Projets.css";

export default function Projets() {
    const projects = [
        {
          id: 1,
          title: "Porject1",
          image: Cretchum,
          description: "un beau projet", 
          skills: [{ skill: "JavaScript", id: 1 }, { skill: "Autre", id: 2 }]
        },
        {
          id: 2,
          title: "Porject2",
          image: Cretchum,
          description: "projet Lorem ipsilum blabsdfjsdf skdfjhskjfsd skjdfhsjkhdf skdjfhd", 
          skills: [{ skill: "JavaScript", id: 1 }, { skill: "Autre", id: 2 }]
        },
        {
          id: 3,
          title: "Porject3",
          image: Cretchum,
          description: "", 
          skills: [{ skill: "JavaScript", id: 1 }, { skill: "Autre", id: 2 }]
        },
    ];

    return (
        <ul id="projectsMap">
          {projects.map((project) => (
            <li key={project.id} className="projectList">
                <ProjetsComponent project={project} />
            </li>
          ))}
        </ul>
    )
}
