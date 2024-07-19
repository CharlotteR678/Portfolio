import PropTypes from "prop-types";

export default function Experiences({titleExp, descritionExp}) {
  return (
    <div>
      <h3 className="h3About">{titleExp}</h3>
      <p>{descritionExp}</p>
    </div>
  );
}

Experiences.propTypes = {
    titleExp: PropTypes.string.isRequired,
    descritionExp: PropTypes.bool.isRequired,
  };