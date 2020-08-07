const { database } = require("../../database/database");
require("moment/locale/es.js");

const getDistritos = () => {
  return database
    .select(
      "d.id_distrito",
      "d.id_provincia",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "d.estado"
    )
    .from("distrito as d")
    .innerJoin("provincia as p", "p.id_provincia", "d.id_provincia")
    .orderBy("id_distrito", "desc")
    .then((distrito) => {
      return distrito;
    })
    .catch((err) => {
      return err;
    });
};

const crearDistrito = (id_provincia, nombre_distrito, estado) => {
  return database("distrito")
    .insert({
      id_provincia: id_provincia,
      nombre_distrito: nombre_distrito,
      estado: estado,
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getDistritoByid = (id_distrito) => {
  return database
    .select("*")
    .from("distrito")
    .where("id_distrito", "=", id_distrito)
    .then((distrito) => {
      return distrito;
    })
    .catch((err) => {
      return err;
    });
};

const updateDistrito = (id_provincia, nombre_distrito, id_distrito, estado) => {
  return database("distrito")
    .update({
      id_provincia: id_provincia,
      nombre_distrito: nombre_distrito,
      estado: estado,
    })
    .where("id_distrito", "=", id_distrito)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getDistritos = getDistritos;
module.exports.crearDistrito = crearDistrito;
module.exports.getDistritoByid = getDistritoByid;
module.exports.updateDistrito = updateDistrito;
