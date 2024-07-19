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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/a-propos">
            <button type="button" id="buttonHP" className="globallButton">
              En savoir +
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
