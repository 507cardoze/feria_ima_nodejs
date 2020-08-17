const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearInventarioAjusteValidation = (data) => {
  const schema = Joi.object({
    id_inventario: Joi.number().integer().required().messages({
      "number.base": `Inventario de debe ser de tipo entero.`,
      "number.empty": `Inventario  no debe ser ir vacio.`,
      "number.min": `Inventario debe ser mayor a {#limit} caracteres.`,
      "number.max": `Inventario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Inventario es un campo requerido.`,
    }),
    id_feria: Joi.number().integer().required().messages({
      "number.base": `Feria de debe ser de tipo entero.`,
      "number.empty": `Feria no debe ser ir vacio.`,
      "number.min": `Feria debe ser mayor a {#limit} caracteres.`,
      "number.max": `Feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Feria es un campo requerido.`,
    }),
    id_tipo_ajuste: Joi.string().min(1).max(100).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    cantidad_ajuste: Joi.number().integer().required().messages({
      "number.base": `Cantidad de ajuste de debe ser de tipo entero.`,
      "number.empty": `Cantidad de ajuste no debe ser ir vacio.`,
      "number.min": `Cantidad de ajuste debe ser mayor a {#limit} caracteres.`,
      "number.max": `Cantidad de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Cantidad de ajuste es un campo requerido.`,
    }),
    observacion: Joi.string().min(1).max(100).required().messages({
      "string.base": `Observación debe ser de tipo texto.`,
      "string.empty": `Observación no debe ser ir vacio.`,
      "string.min": `Observación debe ser mayor a {#limit} caracteres.`,
      "string.max": `Observación no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Observación es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateInventarioAjusteValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().integer().required().messages({
      "number.base": `id_inventario_ajuste de debe ser de tipo entero.`,
      "number.empty": `id_inventario_ajuste  no debe ser ir vacio.`,
      "number.min": `id_inventario_ajuste debe ser mayor a {#limit} caracteres.`,
      "number.max": `id_inventario_ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `id_inventario_ajuste es un campo requerido.`,
    }),
    id_inventario: Joi.number().integer().required().messages({
      "number.base": `Inventario de debe ser de tipo entero.`,
      "number.empty": `Inventario  no debe ser ir vacio.`,
      "number.min": `Inventario debe ser mayor a {#limit} caracteres.`,
      "number.max": `Inventario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Inventario es un campo requerido.`,
    }),
    id_feria: Joi.number().integer().required().messages({
      "number.base": `Feria de debe ser de tipo entero.`,
      "number.empty": `Feria no debe ser ir vacio.`,
      "number.min": `Feria debe ser mayor a {#limit} caracteres.`,
      "number.max": `Feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Feria es un campo requerido.`,
    }),
    id_tipo_ajuste: Joi.string().min(1).max(100).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    cantidad_ajuste: Joi.number().integer().required().messages({
      "number.base": `Cantidad de ajuste de debe ser de tipo entero.`,
      "number.empty": `Cantidad de ajuste no debe ser ir vacio.`,
      "number.min": `Cantidad de ajuste debe ser mayor a {#limit} caracteres.`,
      "number.max": `Cantidad de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Cantidad de ajuste es un campo requerido.`,
    }),
    observacion: Joi.string().min(1).max(100).required().messages({
      "string.base": `Observación debe ser de tipo texto.`,
      "string.empty": `Observación no debe ser ir vacio.`,
      "string.min": `Observación debe ser mayor a {#limit} caracteres.`,
      "string.max": `Observación no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Observación es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearInventarioAjusteValidation = crearInventarioAjusteValidation;
module.exports.updateInventarioAjusteValidation = updateInventarioAjusteValidation;
