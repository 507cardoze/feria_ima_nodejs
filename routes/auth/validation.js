const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const loginValidation = (data) => {
  const schema = Joi.object({
    UserName: Joi.string().min(3).max(25).required().messages({
      "string.base": `Usuario no debe ser ir vacio.`,
      "string.empty": `Usuario no debe ser ir vacio.`,
      "string.min": `Usuario debe ser mayor a {#limit} caracteres.`,
      "string.max": `Usuario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Usuario es un campo requerido.`,
    }),
    Password: Joi.string().min(3).max(25).required().messages({
      "string.base": `Contraseña no debe ser ir vacio.`,
      "string.empty": `Contraseña no debe ser ir vacio.`,
      "string.min": `Contraseña debe ser mayor a {#limit} caracteres.`,
      "string.max": `Contraseña no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Contraseña es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.loginValidation = loginValidation;
