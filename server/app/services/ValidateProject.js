const Joi = require("joi");

const projectSchema = Joi.object({
  title: Joi.string().max(55).required(),
  description: Joi.string().max(255).required(),
  selectedSkills: Joi.array().required(),
});

const ValidateProject = (req, res, next) => {
  const { error } = projectSchema.validate(req.body, { abortEarly: true });

  if (error === undefined) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = ValidateProject;
