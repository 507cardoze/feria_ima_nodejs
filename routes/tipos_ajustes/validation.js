const Joi = require("@hapi/joi");
//validacion de datos del formulario authenticacion
const crearTipoValidation = (data) => {
  const schema = Joi.object({
    id_tipo_ajuste: Joi.string().min(3).max(3).required().messages({
      "string.base": `Nomenclatura debe ser de tipo texto.`,
      "string.empty": `Nomenclatura no debe ser ir vacio.`,
      "string.min": `Nomenclatura debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nomenclatura no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nomenclatura es un campo requerido.`,
    }),
    descripcion: Joi.string().min(3).max(25).required().messages({
      "string.base": `Descripcion debe ser de tipo texto.`,
      "string.empty": `Descripcion no debe ser ir vacio.`,
      "string.min": `Descripcion debe ser mayor a {#limit} caracteres.`,
      "string.max": `Descripcion no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Descripcion es un campo requerido.`,
    }),
    usuario_creacion: Joi.string().required().messages({
      "string.base": `Descripcion debe ser de tipo texto.`,
      "string.empty": `Descripcion no debe ser ir vacio.`,
      "any.required": `Descripcion es un campo requerido.`,
    }),
    estado: Joi.boolean().required().messages({
      "any.required": `Estado es un campo requerido.`,
    }),
  });
  return schema.validate(data);
};

const updateTipoValidation = (data) => {
  const schema = Joi.object({
    id_tipo_ajuste: Joi.string().min(3).max(3).required().messages({
      "string.base": `Nomenclatura debe ser de tipo texto.`,
      "string.empty": `Nomenclatura no debe ser ir vacio.`,
      "string.min": `Nomenclatura debe ser mayor a {#limit} caracteres.`,
      "string.max": `Nomenclatura no debe ser mayor a {#limit} caracteres.`,
      "any.required": `Nomenclatura es un campo requerido.`,
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
