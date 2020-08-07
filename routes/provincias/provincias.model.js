const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getProvincias = () => {
  return database
    .select("id_provincia", "id_pais", "nombre_provincia", "estado")
    .from("provincia")
    .orderBy("id_provincia", "desc")
    .then((provincia) => {
      return provincia;
    })
    .catch((err) => {
      return err;
    });
};

const crearProvincia = (id_pais, nombre_provincia, estado) => {
  return database("provincia")
    .insert({
      id_pais: id_pais,
      nombre_provincia: nombre_provincia,
      estado: estado,
    })
    .then((provincia) => {
      return provincia;
    })
    .catch((err) => {
      return err;
    });
};

const getProvinciaByid = (id_provincia) => {
  return database
    .select("*")
    .from("provincia")
    .where("id_provincia", "=", id_provincia)
    .then((provincia) => {
      return provincia;
    })
    .catch((err) => {
      return err;
    });
};

const updateProvincia = (id_provincia, id_pais, nombre_provincia, estado) => {
  return database("provincia")
    .update({
      id_pais: id_pais,
      nombre_provincia: nombre_provincia,
      estado: estado,
    })
    .where("id_provincia", "=", id_provincia)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getProvincias = getProvincias;
module.exports.crearProvincia = crearProvincia;
module.exports.getProvinciaByid = getProvinciaByid;
module.exports.updateProvincia = updateProvincia;
