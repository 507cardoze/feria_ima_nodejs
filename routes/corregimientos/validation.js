const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearCorregimientoValidation = (data) => {
  const schema = Joi.object({
    nombre_corregimiento: Joi.string().min(3).max(25).required().messages({
      "string.empty": `Corregimiento no debe ser ir vacio.`,
      "string.base": `Corregimiento debe ser de tipo texto.`,
      "string.min": `Corregimiento debe ser mayor a {#limit} caracteres.`,
      "string.max": `Corregimiento no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Corregimiento es un campo requerido.`,
    }),
    id_distrito: Joi.number().integer().required().messages({
      "number.base": `Distrito no debe ser ir vacio.`,
      "number.empty": `Distrito no debe ser ir vacio.`,
      "number.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "number.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Distrito es un campo requerido.`,
    }),
    id_provincia: Joi.number().integer().required().messages({
      "any.required": `Provincia es un campo requerido.`,
      "number.empty": `Provincia  no debe ser ir vacio.`,
      "number.base": `Provincia  no debe ser ir vacio.`,
      "number.min": `Provincia debe ser mayor a {#limit} caracteres.`,
      "number.max": `Provincia no debe ser mayor a {#limit} caracteres.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateCorregimientoValidation = (data) => {
  const schema = Joi.object({
    nombre_corregimiento: Joi.string().min(3).max(25).required().messages({
      "string.empty": `Corregimiento no debe ser ir vacio.`,
      "string.base": `Corregimiento debe ser de tipo texto.`,
      "string.min": `Corregimiento debe ser mayor a {#limit} caracteres.`,
      "string.max": `Corregimiento no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Corregimiento es un campo requerido.`,
    }),

    id_distrito: Joi.number().integer().required().messages({
      "number.base": `Distrito no debe ser ir vacio.`,
      "number.empty": `Distrito no debe ser ir vacio.`,
      "number.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "number.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Distrito es un campo requerido.`,
    }),
    id_provincia: Joi.number().integer().required().messages({
      "any.required": `Provincia es un campo requerido.`,
      "number.empty": `Provincia  no debe ser ir vacio.`,
      "number.base": `Provincia  no debe ser ir vacio.`,
      "number.min": `Provincia debe ser mayor a {#limit} caracteres.`,
      "number.max": `Provincia no debe ser mayor a {#limit} caracteres.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
    id_corregimiento: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

const searchTextValidation = (data) => {
  const schema = Joi.object({
    text: Joi.string().min(3).max(100).required(),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearCorregimientoValidation = crearCorregimientoValidation;
module.exports.updateCorregimientoValidation = updateCorregimientoValidation;
module.exports.searchTextValidation = searchTextValidation;
