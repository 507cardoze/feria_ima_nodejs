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

const registerValidation = (data) => {
  const schema = Joi.object({
    login: Joi.string().min(3).max(25).required().messages({
      "string.base": `Usuario no debe ser ir vacio.`,
      "string.empty": `Usuario no debe ser ir vacio.`,
      "string.min": `Usuario debe ser mayor a {#limit} caracteres.`,
      "string.max": `Usuario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Usuario es un campo requerido.`,
    }),
    pswd: Joi.string().min(3).max(25).required().messages({
      "string.base": `Contraseña no debe ser ir vacio.`,
      "string.empty": `Contraseña no debe ser ir vacio.`,
      "string.min": `Contraseña debe ser mayor a {#limit} caracteres.`,
      "string.max": `Contraseña no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Contraseña es un campo requerido.`,
    }),
    name: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nombre no debe ser ir vacio.`,
      "string.empty": `Nombre no debe ser ir vacio.`,
      "string.min": `Nombre debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nombre no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nombre es un campo requerido.`,
    }),
    email: Joi.string().min(3).max(100).required().messages({
      "string.base": `correo electronico no debe ser ir vacio.`,
      "string.empty": `correo electronico no debe ser ir vacio.`,
      "string.min": `correo electronico debe ser mayor a {#limit} caracteres.`,
      "string.max": `correo electronico no debe ser mayor a {#limit} caracteres.`,
      "any.required": `correo electronico es un campo requerido.`,
    }),
    active: Joi.boolean().required().messages({
      "any.required": `active es un campo requerido.`,
    }),
    web: Joi.boolean().required().messages({
      "any.required": `web es un campo requerido.`,
    }),
    terminal: Joi.boolean().required().messages({
      "any.required": `terminal es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const resetValidation = (data) => {
  const schema = Joi.object({
    login: Joi.string().min(3).max(25).required().messages({
      "string.base": `Usuario no debe ser ir vacio.`,
      "string.empty": `Usuario no debe ser ir vacio.`,
      "string.min": `Usuario debe ser mayor a {#limit} caracteres.`,
      "string.max": `Usuario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Usuario es un campo requerido.`,
    }),
    password: Joi.string().min(3).max(25).required().messages({
      "string.base": `Contraseña no debe ser ir vacio.`,
      "string.empty": `Contraseña no debe ser ir vacio.`,
      "string.min": `Contraseña debe ser mayor a {#limit} caracteres.`,
      "string.max": `Contraseña no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Contraseña es un campo requerido.`,
    }),
    repeat_password: Joi.ref("password"),
  }).with("password", "repeat_password");
  return schema.validate(data);
};

const updateValidation = (data) => {
  const schema = Joi.object({
    login: Joi.string().min(3).max(25).required().messages({
      "string.base": `Usuario no debe ser ir vacio.`,
      "string.empty": `Usuario no debe ser ir vacio.`,
      "string.min": `Usuario debe ser mayor a {#limit} caracteres.`,
      "string.max": `Usuario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Usuario es un campo requerido.`,
    }),
    name: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nombre no debe ser ir vacio.`,
      "string.empty": `Nombre no debe ser ir vacio.`,
      "string.min": `Nombre debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nombre no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nombre es un campo requerido.`,
    }),
    email: Joi.string().min(3).max(100).required().messages({
      "string.base": `correo electronico no debe ser ir vacio.`,
      "string.empty": `correo electronico no debe ser ir vacio.`,
      "string.min": `correo electronico debe ser mayor a {#limit} caracteres.`,
      "string.max": `correo electronico no debe ser mayor a {#limit} caracteres.`,
      "any.required": `correo electronico es un campo requerido.`,
    }),
    active: Joi.boolean().required().messages({
      "any.required": `active es un campo requerido.`,
    }),
    web: Joi.boolean().required().messages({
      "any.required": `web es un campo requerido.`,
    }),
    terminal: Joi.boolean().required().messages({
      "any.required": `terminal es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
module.exports.resetValidation = resetValidation;
module.exports.updateValidation = updateValidation;
