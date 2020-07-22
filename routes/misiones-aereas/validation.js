const Joi = require("@hapi/joi");
//validacion de datos del formulario de creacion de funciones
const newMisionValidation = (data) => {
  const schema = Joi.object({
    id_aeronave: Joi.number().integer().required(),
    id_provincia: Joi.number().integer().required(),
    id_operativo: Joi.number().integer().required(),
    ubicacion: Joi.string().max(100).required(),
    descripcion: Joi.string().max(255).required(),
    tripulacion: Joi.array()
      .items(
        Joi.object().keys({
          id: Joi.number().integer().required(),
          id_user: Joi.number().integer().required(),
          nombre: Joi.string().max(100).required(),
          apellido: Joi.string().max(100).required(),
          cedula: Joi.string().max(100).required(),
          empleado: Joi.number().integer().required(),
          displayName: Joi.string().max(100).required(),
          horas_vuelo: Joi.number().required(),
          horas_tierra: Joi.number().required(),
          id_funcion: Joi.number().integer().required(),
          en_vuelo: Joi.number().integer().required(),
        })
      )
      .required(),
  });
  return schema.validate(data);
};

const detalleValidation = (data) => {
  const schema = Joi.object({
    id_mision: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

const despegueValidation = (data) => {
  const schema = Joi.object({
    id_mision: Joi.number().integer().required(),
    entidades: Joi.array()
      .required()
      .items(
        Joi.object().keys({
          id: Joi.number().integer().required(),
          nombre: Joi.string().max(100).required(),
          horas_vuelo: Joi.number().required(),
          horas_tierra: Joi.number().required(),
          id_tipo: Joi.number().integer().required(),
        })
      ),
  });
  return schema.validate(data);
};

const aterrizajeValidation = (data) => {
  const schema = Joi.object({
    id_mision: Joi.number().integer().required(),
    ubicacion: Joi.string().max(100).required(),
    id_provincia: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

const completarValidation = (data) => {
  const schema = Joi.object({
    id_mision: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

const cancelarValidation = (data) => {
  const schema = Joi.object({
    id_mision: Joi.number().integer().required(),
    motivo: Joi.string().max(200).required(),
  });
  return schema.validate(data);
};

const misionByIdStatusValidation = (data) => {
  const schema = Joi.object({
    id_status: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

const validationHorasVuelo = (data) => {
  const schema = Joi.object({
    id_mision: Joi.number().integer().required(),
    horas_vuelo: Joi.number().required(),
    horas_tierra: Joi.number().required(),
    horas_vuelo_manto: Joi.number().required(),
    horas_tierra_manto: Joi.number().required(),
    diurno: Joi.number().required(),
    nocturno: Joi.number().required(),
    escalas: Joi.array()
      .required()
      .items(
        Joi.object().keys({
          id: Joi.number().integer().required(),
          id_mision: Joi.number().integer().required(),
          id_provincia: Joi.number().integer().required(),
          id_tipo_mision: Joi.number().integer().required(),
          id_entidad: Joi.number().integer().required(),
          provincia: Joi.string().max(100).required(),
          id_status: Joi.number().integer().required(),
          status: Joi.string().max(100).required(),
          ubicacion: Joi.string().max(100).required(),
          fecha: Joi.string().max(100).required(),
          hora_piloto: Joi.string().max(100).required(),
          hora_manto: Joi.string().max(100).required(),
          peso: Joi.number().integer().required(),
          pax: Joi.number().integer().required(),
        })
      ),
    observacion_piloto: Joi.string().max(100).required(),
    observacion_manto: Joi.string().max(100).required(),
    tempArranque_1: Joi.number().integer().required(),
    tempArranque_2: Joi.number().integer().required(),
    Torque_1: Joi.number().integer().required(),
    Torque_2: Joi.number().integer().required(),
    n1RPM_1: Joi.number().integer().required(),
    n1RPM_2: Joi.number().integer().required(),
    n2RPM_1: Joi.number().integer().required(),
    n2RPM_2: Joi.number().integer().required(),
    temp_1: Joi.number().integer().required(),
    temp_2: Joi.number().integer().required(),
    FF_1: Joi.number().integer().required(),
    FF_2: Joi.number().integer().required(),
    oilTemp_1: Joi.number().integer().required(),
    oilTemp_2: Joi.number().integer().required(),
    pressAlt_1: Joi.number().integer().required(),
    pressAlt_2: Joi.number().integer().required(),
    alt_1: Joi.number().integer().required(),
    alt_2: Joi.number().integer().required(),
    oat_1: Joi.number().integer().required(),
    oat_2: Joi.number().integer().required(),
    kias_1: Joi.number().integer().required(),
    kias_2: Joi.number().integer().required(),
    xlsn_press: Joi.number().integer().required(),
    gbox_oilTemp: Joi.number().integer().required(),
  });
  return schema.validate(data);
};

//exportacion de funciones de validacion
module.exports.newMisionValidation = newMisionValidation;
module.exports.detalleValidation = detalleValidation;
module.exports.despegueValidation = despegueValidation;
module.exports.aterrizajeValidation = aterrizajeValidation;
module.exports.completarValidation = completarValidation;
module.exports.cancelarValidation = cancelarValidation;
module.exports.misionByIdStatusValidation = misionByIdStatusValidation;
module.exports.validationHorasVuelo = validationHorasVuelo;
