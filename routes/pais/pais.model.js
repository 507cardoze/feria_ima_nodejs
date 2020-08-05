const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getPaises = () => {
  return database
    .select("*")
    .from("pais")
    .orderBy("fecha_creacion", "desc")
    .then((paises) => {
      return paises;
    })
    .catch((err) => {
      return err;
    });
};

const crearPais = (nomesclatura, pais, nacionalidad, estado, username) => {
  return database("pais")
    .insert({
      id_pais: nomesclatura,
      nombre_pais: pais,
      nombre_nacionalidad: nacionalidad,
      estado: estado,
      fecha_creacion: moment().format(),
      usuario_creacion: username,
    })
    .then((pais) => {
      return pais;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.crearPais = crearPais;
module.exports.getPaises = getPaises;
