const Joi = require('joi');

const schema = Joi.object({
  _id: Joi.string(),
  createdOn: Joi.date(),
  updatedOn: Joi.date(),
  type: Joi.string().required(),
  name: Joi.string().required(),
  color: Joi.string().required(),
  number: Joi.number().required(),
});

module.exports = (obj) => schema.validate(obj, { allowUnknown: false });