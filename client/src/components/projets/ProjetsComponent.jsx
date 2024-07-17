import PropTypes from "prop-types";

export default function ProjetsComponent({ project }) {
  return (
    <>
      <img src={project.image} alt={project.title} className="projectImage" />
      <h2 className="h2Project">{project.title}</h2>
      <p className="projectDescription">{project.description}</p>
      <ul className="projectSkillMap">
        {project.skills.map((skill) => (
          <li key={skill.id} className="projectSkill">
            {skill.skill}
          </li>
        ))}
      </ul>
    </>
  );
}

ProjetsComponent.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
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
