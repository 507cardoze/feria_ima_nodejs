const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearProvinciaValidation = (data) => {
  const schema = Joi.object({
    id_pais: Joi.string().min(3).max(3).required().messages({
      "string.base": `Pais debe ser de tipo texto.`,
      "string.empty": `Pais no debe ser ir vacio.`,
      "string.min": `Pais debe ser mayor a {#limit} caracteres.`,
      "string.max": `Pais no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Pais es un campo requerido.`,
    }),
    nombre_provincia: Joi.string().min(3).max(25).required().messages({
      "string.base": `Provincia debe ser de tipo texto.`,
      "string.empty": `Provincia no debe ser ir vacio.`,
      "string.min": `Provincia debe ser mayor a {#limit} caracteres.`,
      "string.max": `Provincia no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Provincia es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateProvinciaValidation = (data) => {
  const schema = Joi.object({
    nombre_provincia: Joi.string().min(3).max(25).required().messages({
      "string.base": `Provincia debe ser de tipo texto.`,
      "string.empty": `Provincia no debe ser ir vacio.`,
      "string.min": `Provincia debe ser mayor a {#limit} caracteres.`,
      "string.max": `Provincia no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Provincia es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearProvinciaValidation = crearProvinciaValidation;
module.exports.updateProvinciaValidation = updateProvinciaValidation;
