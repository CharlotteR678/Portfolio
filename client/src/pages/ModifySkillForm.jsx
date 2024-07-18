import { useState, useReducer } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../css/Form.css";

import TitleH2Component from "../components/TitleH2Component";
import PopUp from "../components/Popup";

export default function ModifySkillForm() {
  const skillData = useLoaderData();
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const [confirmBox, setConfirmBox] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const name = formData.get("name");

      const response = await fetch(`${URL}/skill/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
        credentials: "include",
      });

      if (response.status !== 204) {
        throw new Error("Failed to modify project");
      }
      navigate("/admin");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Create initial State for the useReducer hook
  const initialState = {
    skill: { ...skillData },
  };

  // Create the different actions that will be used in UseReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_SKILL":
        return { ...state, skill: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChangeadd = (e, champ) => {
    dispatch({
      type: "SET_SKILL",
      payload: { ...state.skill, [champ]: e.target.value },
    });
  };

  const deleteSkill = async () => {
    try {
      const response = await fetch(`${URL}/skill/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 204) {
        return console.error("an error occured, try againt later");
      }
      return navigate("/admin");
    } catch (err) {
      return console.error("Fetch error:", err);
    }
  };

  return (
    <main className="formMain">
      <TitleH2Component title={state.skill.name} />
      <PopUp
        text="Êtes-vous sûr de vouloir effectuer cette action ?"
        HandleDelete={deleteSkill}
        confirmBox={confirmBox}
        setConfirmBox={setConfirmBox}
      />
      <form method="post" className="formGobalModify" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="title">
          NOM
        </label>
        <input
          className="formInput"
          type="text"
          name="name"
          defaultValue={state.skill.name}
          onChange={(e) => onChangeadd(e, "name")}
          required
        />
        <button className="formButton globallButton" type="submit">
          ENVOYER
        </button>
      </form>
    </main>
  );
}
