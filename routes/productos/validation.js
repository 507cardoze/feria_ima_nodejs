const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearProductoValidation = (data) => {
  const schema = Joi.object({
    nombre_productos: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nombre del producto no debe ser ir vacio.`,
      "string.empty": `Nombre del producto no debe ser ir vacio.`,
      "string.min": `Nombre del producto debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nombre del producto no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nombre del producto es un campo requerido.`,
    }),
    frecuencia_compra_dias: Joi.number().integer().required().messages({
      "number.base": `Frecuencia de compra de debe ser de tipo entero.`,
      "number.empty": `Frecuencia de compra  no debe ser ir vacio.`,
      "number.min": `Frecuencia de compra debe ser mayor a {#limit} caracteres.`,
      "number.max": `Frecuencia de compra no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Frecuencia de compra es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateProductoValidation = (data) => {
  const schema = Joi.object({
    nombre_productos: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nombre del producto no debe ser ir vacio.`,
      "string.empty": `Nombre del producto no debe ser ir vacio.`,
      "string.min": `Nombre del producto debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nombre del producto no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nombre del producto es un campo requerido.`,
    }),
    frecuencia_compra_dias: Joi.number().integer().required().messages({
      "number.base": `Frecuencia de compra de debe ser de tipo entero.`,
      "number.empty": `Frecuencia de compra  no debe ser ir vacio.`,
      "number.min": `Frecuencia de compra debe ser mayor a {#limit} caracteres.`,
      "number.max": `Frecuencia de compra no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Frecuencia de compra es un campo requerido.`,
    }),
    id_productos: Joi.number().integer().required().messages({
      "number.base": `id_productos de debe ser de tipo entero.`,
      "number.empty": `id_productos  no debe ser ir vacio.`,
      "number.min": `id_productos debe ser mayor a {#limit} caracteres.`,
      "number.max": `id_productos no debe ser mayor a {#limit} caracteres.`,
      "any.required": `id_productos es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearProductoValidation = crearProductoValidation;
module.exports.updateProductoValidation = updateProductoValidation;
