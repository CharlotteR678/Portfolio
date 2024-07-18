import PropTypes from "prop-types";

export default function ProjetsComponent({ project, image }) {
  return (
    <>
    <div className="projectImageContainter">
      <img src={image} alt={project.title} className="projectImage" />
      </div>
      <h2 className="h2Project">{project.title}</h2>
      <p className="projectDescription">{project.description}</p>
      <p className="projectSkill">{project.skills}</p>
      {/* <ul className="projectSkillMap">
        {project.skills.map((skill) => (
          <li key={skill.id} className="projectSkill">
            {skill.skill}
          </li>
        ))}
      </ul> */}
    </>
  );
}

ProjetsComponent.propTypes = {
  image: PropTypes.string.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        skill: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
