import PropTypes from "prop-types";
import "../css/PopUp.css";

export default function PopUp({
  text,
  confirmBox,
  setConfirmBox,
  HandleDelete,
}) {
  const deletePop = () => {
    setConfirmBox(!confirmBox);
  };

  return (
    <>
      <div className={confirmBox === false ? "hidden" : "popUp"}>
        <p id="textPopUp">{text}</p>
        <ul id="buttonPopUpUl">
          <li className="popUpLi">
            <button
              type="button"
              className="buttonPopUp globallButton"
              onClick={deletePop}
            >
              Non
            </button>
          </li>
          <li className="popUpLi">
            <button
              type="submit"
              className="buttonPopUp globallButton"
              onClick={HandleDelete}
            >
              Oui
            </button>
          </li>
        </ul>
      </div>
      <button type="button" onClick={deletePop} id="popUpButton">
        SUPPRIMER
      </button>
    </>
  );
}

PopUp.propTypes = {
  text: PropTypes.string.isRequired,
  confirmBox: PropTypes.bool.isRequired,
  setConfirmBox: PropTypes.func.isRequired,
  HandleDelete: PropTypes.func.isRequired,
};
