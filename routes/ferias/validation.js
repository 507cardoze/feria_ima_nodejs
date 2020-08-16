const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearFeriaValidation = (data) => {
  const schema = Joi.object({
    id_provincia: Joi.number().integer().required().messages({
      "number.base": `Provincia de debe ser de tipo entero.`,
      "number.empty": `Provincia  no debe ser ir vacio.`,
      "number.min": `Provincia debe ser mayor a {#limit} caracteres.`,
      "number.max": `Provincia no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Provincia es un campo requerido.`,
    }),
    id_distrito: Joi.number().integer().required().messages({
      "number.base": `Distrito de debe ser de tipo entero.`,
      "number.empty": `Distrito  no debe ser ir vacio.`,
      "number.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "number.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Distrito es un campo requerido.`,
    }),
    id_corregimiento: Joi.number().integer().required().messages({
      "number.base": `Corregimiento de debe ser de tipo entero.`,
      "number.empty": `Corregimiento  no debe ser ir vacio.`,
      "number.min": `Corregimiento debe ser mayor a {#limit} caracteres.`,
      "number.max": `Corregimiento no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Corregimiento es un campo requerido.`,
    }),
    nombre_feria: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nombre de la feria no debe ser ir vacio.`,
      "string.empty": `Nombre de la feria no debe ser ir vacio.`,
      "string.min": `Nombre de la feria debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nombre de la feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nombre de la feria es un campo requerido.`,
    }),

    descripcion_lugar: Joi.string().min(3).max(100).required().messages({
      "string.base": `Lugar de la feria no debe ser ir vacio.`,
      "string.empty": `Lugar de la feria no debe ser ir vacio.`,
      "string.min": `Lugar de la feria debe ser mayor a {#limit} caracteres.`,
      "string.max": `Lugar de la feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Lugar de la feria es un campo requerido.`,
    }),
    descripcion_feria: Joi.string().min(3).max(100).required().messages({
      "string.base": `Descripcion de la feria no debe ser ir vacio.`,
      "string.empty": `Descripcion de la feria no debe ser ir vacio.`,
      "string.min": `Descripcion de la feria debe ser mayor a {#limit} caracteres.`,
      "string.max": `Descripcion de la feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Descripcion de la feria es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateFeriaValidation = (data) => {
  const schema = Joi.object({
    id_feria: Joi.number().integer().required().messages({
      "number.base": `id_feria de debe ser de tipo entero.`,
      "number.empty": `id_feria  no debe ser ir vacio.`,
      "number.min": `id_feria debe ser mayor a {#limit} caracteres.`,
      "number.max": `id_feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `id_feria es un campo requerido.`,
    }),
    nombre_feria: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nombre de la feria no debe ser ir vacio.`,
      "string.empty": `Nombre de la feria no debe ser ir vacio.`,
      "string.min": `Nombre de la feria debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nombre de la feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nombre de la feria es un campo requerido.`,
    }),
    id_provincia: Joi.number().integer().required().messages({
      "number.base": `Provincia de debe ser de tipo entero.`,
      "number.empty": `Provincia  no debe ser ir vacio.`,
      "number.min": `Provincia debe ser mayor a {#limit} caracteres.`,
      "number.max": `Provincia no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Provincia es un campo requerido.`,
    }),
    id_distrito: Joi.number().integer().required().messages({
      "number.base": `Distrito de debe ser de tipo entero.`,
      "number.empty": `Distrito  no debe ser ir vacio.`,
      "number.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "number.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Distrito es un campo requerido.`,
    }),
    id_corregimiento: Joi.number().integer().required().messages({
      "number.base": `Corregimiento de debe ser de tipo entero.`,
      "number.empty": `Corregimiento  no debe ser ir vacio.`,
      "number.min": `Corregimiento debe ser mayor a {#limit} caracteres.`,
      "number.max": `Corregimiento no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Corregimiento es un campo requerido.`,
    }),
    descripcion_lugar: Joi.string().min(3).max(100).required().messages({
      "string.base": `Lugar de la feria no debe ser ir vacio.`,
      "string.empty": `Lugar de la feria no debe ser ir vacio.`,
      "string.min": `Lugar de la feria debe ser mayor a {#limit} caracteres.`,
      "string.max": `Lugar de la feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Lugar de la feria es un campo requerido.`,
    }),
    descripcion_feria: Joi.string().min(3).max(100).required().messages({
      "string.base": `Descripcion de la feria no debe ser ir vacio.`,
      "string.empty": `Descripcion de la feria no debe ser ir vacio.`,
      "string.min": `Descripcion de la feria debe ser mayor a {#limit} caracteres.`,
      "string.max": `Descripcion de la feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Descripcion de la feria es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearFeriaValidation = crearFeriaValidation;
module.exports.updateFeriaValidation = updateFeriaValidation;
