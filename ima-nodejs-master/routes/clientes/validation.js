const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearClienteValidation = (data) => {
  const schema = Joi.object({
    num_documento: Joi.string().min(3).max(100).required().messages({
      "string.base": `Cedula no debe ser ir vacio.`,
      "string.empty": `Cedula no debe ser ir vacio.`,
      "string.min": `Cedula debe ser mayor a {#limit} caracteres.`,
      "string.max": `Cedula no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Cedula es un campo requerido.`,
    }),
    nombre: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nombre debe ser de tipo texto.`,
      "string.empty": `Nombre no debe ser ir vacio.`,
      "string.min": `Nombre debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nombre no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nombre de ajuste es un campo requerido.`,
    }),
    apellido: Joi.string().min(3).max(100).required().messages({
      "string.base": `Apellido de ajuste debe ser de tipo texto.`,
      "string.empty": `Apellido no debe ser ir vacio.`,
      "string.min": `Apellido debe ser mayor a {#limit} caracteres.`,
      "string.max": `Apellido no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Apellido es un campo requerido.`,
    }),
    nacionalidad: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nacionalidad debe ser de tipo texto.`,
      "string.empty": `Nacionalidad no debe ser ir vacio.`,
      "string.min": `Nacionalidad debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nacionalidad no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nacionalidad es un campo requerido.`,
    }),
    lugar_nacimiento: Joi.string().required().messages({
      "string.base": `Lugar de Nacimiento debe ser de tipo texto.`,
      "string.empty": `Lugar de Nacimiento no debe ser ir vacio.`,
      "any.required": `Lugar de Nacimiento es un campo requerido.`,
    }),
    direccion: Joi.string().min(3).max(100).required().messages({
      "string.base": `Direccion debe ser de tipo texto.`,
      "string.empty": `Direccion no debe ser ir vacio.`,
      "string.min": `Direccion debe ser mayor a {#limit} caracteres.`,
      "string.max": `Direccion no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Direccion es un campo requerido.`,
    }),
    tipo_sangre: Joi.string().required().messages({
      "string.base": `Tipo de sangre debe ser de tipo texto.`,
      "string.empty": `Tipo de sangre no debe ser ir vacio.`,
      "any.required": `Tipo de sangre es un campo requerido.`,
    }),
    genero: Joi.string().optional().messages({
      "string.base": `Genero debe ser de tipo texto.`,
      "string.empty": `Genero no debe ser ir vacio.`,
    }),
    fecha_nacimiento: Joi.string().required().messages({
      "string.base": `Fecha de nacimiento debe ser de tipo texto.`,
      "string.empty": `Fecha de nacimiento no debe ser ir vacio.`,
      "any.required": `Fecha de nacimiento es un campo requerido.`,
    }),
    fecha_expiracion: Joi.string().required().messages({
      "string.base": `Fecha de expiracion debe ser de tipo texto.`,
      "string.empty": `Fecha de expiracion no debe ser ir vacio.`,
      "string.min": `Fecha de expiracion debe ser mayor a {#limit} caracteres.`,
      "string.max": `Fecha de expiracion no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Fecha de expiracion es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateClienteValidation = (data) => {
  const schema = Joi.object({
    num_documento: Joi.string().min(3).max(100).required().messages({
      "string.base": `Cedula no debe ser ir vacio.`,
      "string.empty": `Cedula no debe ser ir vacio.`,
      "string.min": `Cedula debe ser mayor a {#limit} caracteres.`,
      "string.max": `Cedula no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Cedula es un campo requerido.`,
    }),
    nombre: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nombre debe ser de tipo texto.`,
      "string.empty": `Nombre no debe ser ir vacio.`,
      "string.min": `Nombre debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nombre no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nombre de ajuste es un campo requerido.`,
    }),
    apellido: Joi.string().min(3).max(100).required().messages({
      "string.base": `Apellido de ajuste debe ser de tipo texto.`,
      "string.empty": `Apellido no debe ser ir vacio.`,
      "string.min": `Apellido debe ser mayor a {#limit} caracteres.`,
      "string.max": `Apellido no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Apellido es un campo requerido.`,
    }),
    nacionalidad: Joi.string().min(3).max(100).required().messages({
      "string.base": `Nacionalidad debe ser de tipo texto.`,
      "string.empty": `Nacionalidad no debe ser ir vacio.`,
      "string.min": `Nacionalidad debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nacionalidad no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nacionalidad es un campo requerido.`,
    }),
    lugar_nacimiento: Joi.string().required().messages({
      "string.base": `Lugar de Nacimiento debe ser de tipo texto.`,
      "string.empty": `Lugar de Nacimiento no debe ser ir vacio.`,
      "any.required": `Lugar de Nacimiento es un campo requerido.`,
    }),
    direccion: Joi.string().min(3).max(100).required().messages({
      "string.base": `Direccion debe ser de tipo texto.`,
      "string.empty": `Direccion no debe ser ir vacio.`,
      "string.min": `Direccion debe ser mayor a {#limit} caracteres.`,
      "string.max": `Direccion no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Direccion es un campo requerido.`,
    }),
    tipo_sangre: Joi.string().required().messages({
      "string.base": `Tipo de sangre debe ser de tipo texto.`,
      "string.empty": `Tipo de sangre no debe ser ir vacio.`,
      "any.required": `Tipo de sangre es un campo requerido.`,
    }),
    genero: Joi.string().optional().messages({
      "string.base": `Genero debe ser de tipo texto.`,
      "string.empty": `Genero no debe ser ir vacio.`,
    }),
    fecha_nacimiento: Joi.string().required().messages({
      "string.base": `Fecha de nacimiento debe ser de tipo texto.`,
      "string.empty": `Fecha de nacimiento no debe ser ir vacio.`,
      "any.required": `Fecha de nacimiento es un campo requerido.`,
    }),
    fecha_expiracion: Joi.string().required().messages({
      "string.base": `Fecha de expiracion debe ser de tipo texto.`,
      "string.empty": `Fecha de expiracion no debe ser ir vacio.`,
      "string.min": `Fecha de expiracion debe ser mayor a {#limit} caracteres.`,
      "string.max": `Fecha de expiracion no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Fecha de expiracion es un campo requerido.`,
    }),
    id_cliente: Joi.number().integer().required().messages({
      "number.base": `id_cliente de debe ser de tipo entero.`,
      "number.empty": `id_cliente  no debe ser ir vacio.`,
      "number.min": `id_cliente debe ser mayor a {#limit} caracteres.`,
      "number.max": `id_cliente no debe ser mayor a {#limit} caracteres.`,
      "any.required": `id_cliente es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.crearClienteValidation = crearClienteValidation;
module.exports.updateClienteValidation = updateClienteValidation;
