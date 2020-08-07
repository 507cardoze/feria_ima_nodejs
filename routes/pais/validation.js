const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearPaisValidation = (data) => {
  const schema = Joi.object({
    nomesclatura: Joi.string().min(3).max(3).required().messages({
      "string.base": `Nomenclatura debe ser de tipo texto.`,
      "string.empty": `Nomenclatura no debe ser ir vacio.`,
      "string.min": `Nomenclatura debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nomenclatura no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nomenclatura es un campo requerido.`,
    }),
    pais: Joi.string().min(3).max(25).required().messages({
      "string.base": `Pais debe ser de tipo texto.`,
      "string.empty": `Pais no debe ser ir vacio.`,
      "string.min": `Pais debe ser mayor a {#limit} caracteres.`,
      "string.max": `Pais no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Pais es un campo requerido.`,
    }),
    nacionalidad: Joi.string().min(3).max(25).required().messages({
      "string.base": `Nacionalidad debe ser de tipo texto.`,
      "string.empty": `Nacionalidad no debe ser ir vacio.`,
      "string.min": `Nacionalidad debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nacionalidad no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nacionalidad es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Nomesclatura es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearPaisValidation = crearPaisValidation;
