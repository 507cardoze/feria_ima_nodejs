const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const loginValidation = (data) => {
  const schema = Joi.object({
    UserName: Joi.string().min(3).max(25).required(),
    Password: Joi.string().min(3).max(25).required(),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.loginValidation = loginValidation;
