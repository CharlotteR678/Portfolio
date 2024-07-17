import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/NavBar.css";
import { AuthContext } from "../UseContext/AuthContext";

export default function NavBar() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { auth, update, setUpdate } = useContext(AuthContext);

  const disconnect = async () => {
    try {
      const response = await fetch(`${URL}/user/logout`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
      });
      if (response.status === 200) {
        setUpdate(!update);
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
          <NavLink to="/">
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
        {auth !== null && auth !== false && (
          <>
            <li>
              <NavLink to="/admin">
                <p className="menu-link">ADMIN</p>
              </NavLink>
            </li>
            <li>
              <button className="menu-link" type="button" onClick={disconnect}>
                DECONNEXION
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
