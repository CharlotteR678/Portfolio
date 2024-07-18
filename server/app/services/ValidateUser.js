const Joi = require("joi");

const UserSchema = Joi.object({
  name: Joi.string().max(55).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(128).required(),
});

const ValidateUser = (req, res, next) => {
  const { error } = UserSchema.validate(req.body, { abortEarly: true });

  if (error === undefined) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = ValidateUser;
