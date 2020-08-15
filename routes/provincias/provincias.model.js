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

const getProvinciasWithPages = (offset, limit) => {
  return database
    .select("id_provincia", "id_pais", "nombre_provincia", "estado")
    .from("provincia")
    .limit(limit)
    .offset(offset)
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

const getProvinciasBySearch = (text) => {
  return database
    .select("id_provincia", "id_pais", "nombre_provincia", "estado")
    .from("provincia")
    .where("nombre_provincia", "like", `%${text}%`)
    .orWhere("id_pais", "like", `%${text}%`)
    .orderBy("id_provincia", "desc")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getProvinciasByMeta = (id_pais, nombre_provincia) => {
  return database
    .select("id_provincia", "id_pais", "nombre_provincia", "estado")
    .from("provincia")
    .where("id_pais", "=", id_pais)
    .andWhere("nombre_provincia", "=", nombre_provincia)
    .then((provincias) => {
      return provincias;
    })
    .catch((err) => {
      return err;
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

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getProvincias = getProvincias;
module.exports.crearProvincia = crearProvincia;
module.exports.getProvinciaByid = getProvinciaByid;
module.exports.updateProvincia = updateProvincia;
module.exports.getProvinciasWithPages = getProvinciasWithPages;
module.exports.getProvinciasBySearch = getProvinciasBySearch;
module.exports.getProvinciasByMeta = getProvinciasByMeta;
module.exports.paginateQueryResults = paginateQueryResults;
