const Joi = require("joi");

const hotdogsJoiSchema = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().max(25).required(),
  description: Joi.string(),
  url: Joi.string(),
});

module.exports = hotdogsJoiSchema;
