const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getPaises = () => {
  return database
    .select(
      "id_pais",
      "nombre_pais",
      "nombre_nacionalidad",
      "estado",
      "fecha_creacion",
    )
    .from("pais")
    .where("estado", "=", 1)
    .orderBy("fecha_creacion", "desc")
    .then((paises) => {
      return paises;
    })
    .catch((err) => {
      return err;
    });
};

const getPaisesWithPages = (offset, limit) => {
  return database
    .select(
      "id_pais",
      "nombre_pais",
      "nombre_nacionalidad",
      "estado",
      "fecha_creacion",
    )
    .from("pais")
    .limit(limit)
    .offset(offset)
    .orderBy("fecha_creacion", "desc")
    .then((paises) => {
      return paises;
    })
    .catch((err) => {
      return err;
    });
};

const getPaisByMeta = (id_pais, nombre_pais, nombre_nacionalidad) => {
  return database
    .select(
      "id_pais",
      "nombre_pais",
      "nombre_nacionalidad",
      "estado",
      "fecha_creacion",
    )
    .from("pais")
    .where("id_pais", "=", id_pais)
    .andWhere("nombre_pais", "=", nombre_pais)
    .andWhere("nombre_nacionalidad", "=", nombre_nacionalidad)
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
      fecha_creacion: moment().format("YYYY-MM-DD HH:mm:ss"),
      usuario_creacion: username,
    })
    .then((pais) => {
      return pais;
    })
    .catch((err) => {
      return err;
    });
};

const getPaisByid = (id) => {
  return database
    .select("*")
    .from("pais")
    .where("id_pais", "=", id)
    .then((paises) => {
      return paises;
    })
    .catch((err) => {
      return err;
    });
};

const updatePais = (nomesclatura, pais, nacionalidad, estado) => {
  return database("pais")
    .update({
      nombre_pais: pais,
      nombre_nacionalidad: nacionalidad,
      estado: estado,
    })
    .where("id_pais", "=", nomesclatura)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const paginateQueryResults = async (page, limit, getAll, getWithPages) => {
  const offset = limit * page - limit;

  const endIndex = page * limit;

  const results = {};

  const total = await getAll();

  results.total = total.length;

  if (endIndex < total.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (page > 1) {
    results.previous = {
      page: page,
      limit: limit,
    };
  }

  results.results = await getWithPages(offset, limit);
  return results;
};

const getPaisBySearch = (text) => {
  return database
    .select(
      "id_pais",
      "nombre_pais",
      "nombre_nacionalidad",
      "estado",
      "fecha_creacion",
    )
    .from("pais")
    .where("id_pais", "like", `%${text}%`)
    .orWhere("nombre_pais", "like", `%${text}%`)
    .orWhere("nombre_nacionalidad", "like", `%${text}%`)
    .andWhere("estado", "=", 1)
    .orderBy("fecha_creacion", "desc")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.crearPais = crearPais;
module.exports.getPaises = getPaises;
module.exports.getPaisByid = getPaisByid;
module.exports.updatePais = updatePais;
module.exports.getPaisesWithPages = getPaisesWithPages;
module.exports.paginateQueryResults = paginateQueryResults;
module.exports.getPaisBySearch = getPaisBySearch;
module.exports.getPaisByMeta = getPaisByMeta;
