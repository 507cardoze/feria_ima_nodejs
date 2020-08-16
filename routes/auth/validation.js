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
      "string.base": `Contrasena no debe ser ir vacio.`,
      "string.empty": `Contrasena no debe ser ir vacio.`,
      "string.min": `Contrasena debe ser mayor a {#limit} caracteres.`,
      "string.max": `Contrasena no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Contrasena es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.loginValidation = loginValidation;
