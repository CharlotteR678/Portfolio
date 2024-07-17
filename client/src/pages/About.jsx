import "../css/About.css";
import Experiences from "../components/Experiences";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/js.png";
import Mysql from "../assets/images/mysql.png";
import Nodejs from "../assets/images/node.png";
import React from "../assets/images/react.png";


export default function About() {
  return (
    <main id="aboutMain">
      <div id="experiencesDiv">
        <h2>EXPERIENCES</h2>
        <Experiences
          titleExp="titre de l'expérience"
          descritionExp="Une description de l'expérience sdkfjskqfjlkfd"        />
        <Experiences
          titleExp="titre de l'expérience"
          descritionExp="Une description de l'expérience sdkfjskqfjlkfd"
        />
        <Experiences
          titleExp="titre de l'expérience"
          descritionExp="Une description de l'expérience sdkfjskqfjlkfd"        />
      </div>
      <div>
        <div>
          <h2>COMPETENCES</h2>
          <ul className="aboutImage">
            <li className="aboutLi"><img src={Html} alt="HTML logo" className="imageAbout"/></li>
            <li className="aboutLi"><img src={Css} alt="CSS logo" className="imageAbout"/></li>
            <li className="aboutLi"><img src={Js} alt="Javascript logo" className="imageAbout"/></li>
            <li className="aboutLi"><img src={React} alt="React logo" className="imageAbout"/></li>
            <li className="aboutLi"><img src={Nodejs} alt="Node.JS logo" className="imageAbout"/></li>
            <li className="aboutLi"><img src={Mysql} alt="Mysql logo" className="imageAbout"/></li>
          </ul>
        </div>
        <div>
          <h2>CENTRES D'INTERET</h2>
          <ul>
            <li>Quizz</li>
            <li>Mars</li>
            <li>Animaux</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
