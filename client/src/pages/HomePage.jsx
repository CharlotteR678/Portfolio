import { Link, useLoaderData } from "react-router-dom";
import profilePicture from "../assets/images/profilePicture2.png";
import "../css/HomePage.css";

export default function Homepage() {
  const capacities = useLoaderData();

  return (
    <main id="homePageMain">
      <div className="homePageDiv">
        <div id="imageDiv">
          <img src={profilePicture} alt="profile" id="profilePicture" />
        </div>
        <div id="descriptiondiv">
          <h3 id="h3HP">Charlotte Rouyer</h3>
          <h1 id="h1HP">DEVELOPPEUSE WEB FULLSTACK</h1>
          <ul id="capacitiesulHP">
            {capacities.map((capacitie) => (
              <li className="capacitiesHP" key={capacitie.id}>
                {capacitie.name}
              </li>
            ))}
          </ul>
          <p id="pHP">
            Animée par ma passion pour l'informatique et son évolution
            perpétuelle, j'ai choisi de me reconvertir en suivant une formation
            intensive de 5 mois à la Wild Code School. Cette immersion m'a
            permis d'acquérir des compétences en développement Web et Web Mobile
            fullstack, sur JS/REACT. Je suis maintenant prête à mettre en
            pratique ces connaissances à travers une alternance, afin de relever
            de nouveaux défis et de contribuer activement à des projets
            innovants.
          </p>
          <Link to="/a-propos">
            <button type="button" id="buttonHP">
              En savoir +
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
