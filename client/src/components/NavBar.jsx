import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <ul className="NavMenu">
        <li>
          <NavLink exact to="/">
            <p className="menu-link">ACCUEIL</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/a-Propos">
            <p className="menu-link">A PROPOS</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projets">
            <p className="menu-link">MES PROJETS</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
