import { NavLink, useNavigate } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const disconnect = async () => {
    try {
      const response = await fetch(`${URL}/user/logout`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
      });
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

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
        <li>
          <button className="menu-link" type="button" onClick={disconnect}>
            DECONNEXION
          </button>
        </li>
      </ul>
    </div>
  );
}
