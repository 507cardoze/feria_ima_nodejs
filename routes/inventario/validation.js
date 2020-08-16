const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearInventarioValidation = (data) => {
  const schema = Joi.object({
    id_pais: Joi.string().min(3).max(3).required().messages({
      "string.base": `País debe ser de tipo texto.`,
      "string.empty": `País no debe ser ir vacio.`,
      "string.min": `País debe ser mayor a {#limit} caracteres.`,
      "string.max": `País no debe ser mayor a {#limit} caracteres.`,
      "any.required": `País es un campo requerido.`,
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
      "number.empty": `Distrito no debe ser ir vacio.`,
      "number.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "number.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Distrito es un campo requerido.`,
    }),
    id_corregimiento: Joi.number().integer().required().messages({
      "number.base": `Corregimiento de debe ser de tipo entero.`,
      "number.empty": `Corregimiento no debe ser ir vacio.`,
      "number.min": `Corregimiento debe ser mayor a {#limit} caracteres.`,
      "number.max": `Corregimiento no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Corregimiento es un campo requerido.`,
    }),
    id_feria: Joi.number().integer().required().messages({
      "number.base": `Feria de debe ser de tipo entero.`,
      "number.empty": `Feria no debe ser ir vacio.`,
      "number.min": `Feria debe ser mayor a {#limit} caracteres.`,
      "number.max": `Feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Feria es un campo requerido.`,
    }),
    id_producto: Joi.number().integer().required().messages({
      "number.base": `Producto de debe ser de tipo entero.`,
      "number.empty": `Producto no debe ser ir vacio.`,
      "number.min": `Producto debe ser mayor a {#limit} caracteres.`,
      "number.max": `Producto no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Producto es un campo requerido.`,
    }),
    total_inicial_disponible: Joi.number().integer().required().messages({
      "number.base": `Total inicial disponible debe ser de tipo entero.`,
      "number.empty": `Total inicial disponible no debe ser ir vacio.`,
      "number.min": `Total inicial disponible debe ser mayor a {#limit} caracteres.`,
      "number.max": `Total inicial disponible no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Total inicial disponible es un campo requerido.`,
    }),
    disponible_real: Joi.number().integer().required().messages({
      "number.base": `Disponible Real debe ser de tipo entero.`,
      "number.empty": `Disponible Real no debe ser ir vacio.`,
      "number.min": `Disponible Real debe ser mayor a {#limit} caracteres.`,
      "number.max": `Disponible Real no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Disponible Real es un campo requerido.`,
    }),
    total_max_diario: Joi.number().integer().required().messages({
      "number.base": `Total máximo diario debe ser de tipo entero.`,
      "number.empty": `Total máximo diario no debe ser ir vacio.`,
      "number.min": `Total máximo diario debe ser mayor a {#limit} caracteres.`,
      "number.max": `Total máximo diario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Total máximo diario es un campo requerido.`,
    }),
    frecuencia_compra_dias: Joi.number().integer().required().messages({
      "number.base": `Frecuencia de compra de debe ser de tipo entero.`,
      "number.empty": `Frecuencia de compra  no debe ser ir vacio.`,
      "number.min": `Frecuencia de compra debe ser mayor a {#limit} caracteres.`,
      "number.max": `Frecuencia de compra no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Frecuencia de compra es un campo requerido.`,
    }),
    fecha_inicio: Joi.string().min(1).max(100).required().messages({
      "string.base": `Fecha de inicio debe ser de tipo texto.`,
      "string.empty": `Fecha de inicio no debe ser ir vacio.`,
      "string.min": `Fecha de inicio debe ser mayor a {#limit} caracteres.`,
      "string.max": `Fecha de inicio no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Fecha de inicio es un campo requerido.`,
    }),
    fecha_fin: Joi.string().min(1).max(100).required().messages({
      "string.base": `Fecha de fin debe ser de tipo texto.`,
      "string.empty": `Fecha de fin no debe ser ir vacio.`,
      "string.min": `Fecha de fin debe ser mayor a {#limit} caracteres.`,
      "string.max": `Fecha de fin no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Fecha de fin es un campo requerido.`,
    }),
    observacion: Joi.string().min(1).max(100).required().messages({
      "string.base": `Observación debe ser de tipo texto.`,
      "string.empty": `Observación no debe ser ir vacio.`,
      "string.min": `Observación debe ser mayor a {#limit} caracteres.`,
      "string.max": `Observación no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Observación es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateInventarioValidation = (data) => {
  const schema = Joi.object({
    id_inventario: Joi.number().integer().required().messages({
      "string.base": `id_inventario debe ser de tipo texto.`,
      "string.empty": `id_inventario no debe ser ir vacio.`,
      "string.min": `id_inventario debe ser mayor a {#limit} caracteres.`,
      "string.max": `id_inventario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `id_inventario es un campo requerido.`,
    }),
    id_pais: Joi.string().min(3).max(3).required().messages({
      "string.base": `País debe ser de tipo texto.`,
      "string.empty": `País no debe ser ir vacio.`,
      "string.min": `País debe ser mayor a {#limit} caracteres.`,
      "string.max": `País no debe ser mayor a {#limit} caracteres.`,
      "any.required": `País es un campo requerido.`,
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
      "number.empty": `Distrito no debe ser ir vacio.`,
      "number.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "number.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Distrito es un campo requerido.`,
    }),
    id_corregimiento: Joi.number().integer().required().messages({
      "number.base": `Corregimiento de debe ser de tipo entero.`,
      "number.empty": `Corregimiento no debe ser ir vacio.`,
      "number.min": `Corregimiento debe ser mayor a {#limit} caracteres.`,
      "number.max": `Corregimiento no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Corregimiento es un campo requerido.`,
    }),
    id_feria: Joi.number().integer().required().messages({
      "number.base": `Feria de debe ser de tipo entero.`,
      "number.empty": `Feria no debe ser ir vacio.`,
      "number.min": `Feria debe ser mayor a {#limit} caracteres.`,
      "number.max": `Feria no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Feria es un campo requerido.`,
    }),
    id_producto: Joi.number().integer().required().messages({
      "number.base": `Producto de debe ser de tipo entero.`,
      "number.empty": `Producto no debe ser ir vacio.`,
      "number.min": `Producto debe ser mayor a {#limit} caracteres.`,
      "number.max": `Producto no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Producto es un campo requerido.`,
    }),
    total_inicial_disponible: Joi.number().integer().required().messages({
      "number.base": `Total inicial disponible debe ser de tipo entero.`,
      "number.empty": `Total inicial disponible no debe ser ir vacio.`,
      "number.min": `Total inicial disponible debe ser mayor a {#limit} caracteres.`,
      "number.max": `Total inicial disponible no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Total inicial disponible es un campo requerido.`,
    }),
    disponible_real: Joi.number().integer().required().messages({
      "number.base": `Disponible Real debe ser de tipo entero.`,
      "number.empty": `Disponible Real no debe ser ir vacio.`,
      "number.min": `Disponible Real debe ser mayor a {#limit} caracteres.`,
      "number.max": `Disponible Real no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Disponible Real es un campo requerido.`,
    }),
    total_max_diario: Joi.number().integer().required().messages({
      "number.base": `Total máximo diario debe ser de tipo entero.`,
      "number.empty": `Total máximo diario no debe ser ir vacio.`,
      "number.min": `Total máximo diario debe ser mayor a {#limit} caracteres.`,
      "number.max": `Total máximo diario no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Total máximo diario es un campo requerido.`,
    }),
    frecuencia_compra_dias: Joi.number().integer().required().messages({
      "number.base": `Frecuencia de compra de debe ser de tipo entero.`,
      "number.empty": `Frecuencia de compra  no debe ser ir vacio.`,
      "number.min": `Frecuencia de compra debe ser mayor a {#limit} caracteres.`,
      "number.max": `Frecuencia de compra no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Frecuencia de compra es un campo requerido.`,
    }),
    fecha_inicio: Joi.string().min(1).max(100).required().messages({
      "string.base": `Fecha de inicio debe ser de tipo texto.`,
      "string.empty": `Fecha de inicio no debe ser ir vacio.`,
      "string.min": `Fecha de inicio debe ser mayor a {#limit} caracteres.`,
      "string.max": `Fecha de inicio no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Fecha de inicio es un campo requerido.`,
    }),
    fecha_fin: Joi.string().min(1).max(100).required().messages({
      "string.base": `Fecha de fin debe ser de tipo texto.`,
      "string.empty": `Fecha de fin no debe ser ir vacio.`,
      "string.min": `Fecha de fin debe ser mayor a {#limit} caracteres.`,
      "string.max": `Fecha de fin no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Fecha de fin es un campo requerido.`,
    }),
    observacion: Joi.string().min(1).max(100).required().messages({
      "string.base": `Observación debe ser de tipo texto.`,
      "string.empty": `Observación no debe ser ir vacio.`,
      "string.min": `Observación debe ser mayor a {#limit} caracteres.`,
      "string.max": `Observación no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Observación es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearInventarioValidation = crearInventarioValidation;
module.exports.updateInventarioValidation = updateInventarioValidation;
