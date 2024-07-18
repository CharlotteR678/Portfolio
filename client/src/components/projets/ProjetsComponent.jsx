import PropTypes from "prop-types";

export default function ProjetsComponent({ project }) {
  return (
    <>
      <div className="projectImageContainter">
        <img src={project.image} alt={project.title} className="projectImage" />
      </div>
      <h2 className="h2Project">{project.title}</h2>
      <p className="projectDescription">{project.description}</p>
      <ul className="projectSkillMap">
        {project.skills.map((skill) => (
          <li key={skill} className="projectSkill">
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
}

ProjetsComponent.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        skill: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
