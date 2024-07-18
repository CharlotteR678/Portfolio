const Joi = require("joi");

const SkillSchema = Joi.object({
  name: Joi.string().max(55).required(),
});

const ValidateSkill = (req, res, next) => {
  const { error } = SkillSchema.validate(req.body, { abortEarly: true });

  if (error === undefined) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = ValidateSkill;
