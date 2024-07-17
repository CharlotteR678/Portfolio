import PropTypes from "prop-types";
import "../css/TitleH2Component.css"


export default function TitleH2Component({title}) {
    return (
     <h2 className="h2TitleComponent">{title}</h2>
    );
  }


  TitleH2Component.propTypes = {
    title : PropTypes.string.isRequired,
  }

  