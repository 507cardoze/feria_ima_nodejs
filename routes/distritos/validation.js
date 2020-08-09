const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearDistritoValidation = (data) => {
  const schema = Joi.object({
    nombre_distrito: Joi.string().min(3).max(25).required().messages({
      "string.empty": `Distrito no debe ser ir vacio.`,
      "string.base": `Distrito debe ser de tipo texto.`,
      "string.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "string.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
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

const updateDistritoValidation = (data) => {
  const schema = Joi.object({
    id_provincia: Joi.number().integer().required().messages({
      "number.base": `Provincia de debe ser de tipo entero.`,
      "number.empty": `Provincia  no debe ser ir vacio.`,
      "number.min": `Provincia debe ser mayor a {#limit} caracteres.`,
      "number.max": `Provincia no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Provincia es un campo requerido.`,
    }),
    id_distrito: Joi.number().integer().required().messages({
      "number.base": `Provincia de debe ser de tipo entero.`,
      "number.empty": `Provincia  no debe ser ir vacio.`,
      "number.min": `Provincia debe ser mayor a {#limit} caracteres.`,
      "number.max": `Provincia no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Provincia es un campo requerido.`,
    }),
    nombre_distrito: Joi.string().min(3).max(25).required().messages({
      "string.base": `Distrito debe ser de tipo texto.`,
      "string.empty": `Distrito no debe ser ir vacio.`,
      "string.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "string.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Distrito es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearDistritoValidation = crearDistritoValidation;
module.exports.updateDistritoValidation = updateDistritoValidation;
