const { database } = require("../../database/database");
require("moment/locale/es.js");

const getCorregimientos = () => {
  return database
    .select(
      "c.id_corregimiento",
      "c.id_provincia",
      "c.id_distrito",
      "c.nombre_corregimiento",
      "c.estado",
      "d.nombre_distrito",
      "p.nombre_provincia"
    )
    .from("corregimiento as c")
    .innerJoin("distrito as d", "d.id_distrito", "c.id_distrito")
    .innerJoin("provincia as p", "p.id_provincia", "c.id_provincia")
    .orderBy("id_corregimiento", "desc")
    .then((corregimiento) => {
      return corregimiento;
    })
    .catch((err) => {
      return err;
    });
};

const crearCorregimiento = (
  id_provincia,
  id_distrito,
  nombre_corregimiento,
  estado
) => {
  return database("corregimiento")
    .insert({
      id_provincia: id_provincia,
      id_distrito: id_distrito,
      nombre_corregimiento: nombre_corregimiento,
      estado: estado,
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getCorregimientoByid = (id_corregimiento) => {
  return database
    .select(
      "c.id_corregimiento",
      "c.id_provincia",
      "c.id_distrito",
      "c.nombre_corregimiento",
      "c.estado",
      "d.nombre_distrito",
      "p.nombre_provincia"
    )
    .from("corregimiento as c")
    .innerJoin("distrito as d", "d.id_distrito", "c.id_distrito")
    .innerJoin("provincia as p", "p.id_provincia", "c.id_provincia")
    .where("id_corregimiento", "=", id_corregimiento)
    .then((corregimiento) => {
      return corregimiento;
    })
    .catch((err) => {
      return err;
    });
};

const updateCorregimiento = (
  id_corregimiento,
  id_provincia,
  id_distrito,
  nombre_corregimiento,
  estado
) => {
  return database("corregimiento")
    .update({
      id_provincia: id_provincia,
      id_distrito: id_distrito,
      nombre_corregimiento: nombre_corregimiento,
      estado: estado,
    })
    .where("id_corregimiento", "=", id_corregimiento)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getCorregimientos = getCorregimientos;
module.exports.crearCorregimiento = crearCorregimiento;
module.exports.getCorregimientoByid = getCorregimientoByid;
module.exports.updateCorregimiento = updateCorregimiento;
