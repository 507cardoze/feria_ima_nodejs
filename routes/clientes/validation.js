const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearTipoValidation = (data) => {
  const schema = Joi.object({
    num_documento: Joi.number().integer().required().messages({
      "number.base": `Distrito no debe ser ir vacio.`,
      "number.empty": `Distrito no debe ser ir vacio.`,
      "number.min": `Distrito debe ser mayor a {#limit} caracteres.`,
      "number.max": `Distrito no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Distrito es un campo requerido.`,
    }),
    nombre: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    apellido: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    genero: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    fecha_nacimiento: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    nacionalidad: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    lugar_nacimiento: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    tipo_sange: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    direccion: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    fecha_expiracion: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    usuario_creacion: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateTipoValidation = (data) => {
  const schema = Joi.object({
    id_tipo_ajuste: Joi.string().min(1).max(3).required().messages({
      "string.base": `Tipo de ajuste debe ser de tipo texto.`,
      "string.empty": `Tipo de ajuste no debe ser ir vacio.`,
      "string.min": `Tipo de ajuste debe ser mayor a {#limit} caracteres.`,
      "string.max": `Tipo de ajuste no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Tipo de ajuste es un campo requerido.`,
    }),
    descripcion: Joi.string().min(3).max(25).required().messages({
      "string.base": `Descripcion debe ser de tipo texto.`,
      "string.empty": `Descripcion no debe ser ir vacio.`,
      "string.min": `Descripcion debe ser mayor a {#limit} caracteres.`,
      "string.max": `Descripcion no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Descripcion es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearTipoValidation = crearTipoValidation;
module.exports.updateTipoValidation = updateTipoValidation;
