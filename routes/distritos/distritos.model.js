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

const getDistritosWithPages = (offset, limit) => {
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
    .limit(limit)
    .offset(offset)
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

const getDistritoByIdProvincia = (id_provincia) => {
  return database
    .select("*")
    .from("distrito")
    .where("id_provincia", "=", id_provincia)
    .then((distrito) => {
      return distrito;
    })
    .catch((err) => {
      return err;
    });
};

const getDistritoBySearch = (text) => {
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
    .where("p.nombre_provincia", "like", `%${text}%`)
    .orWhere("d.nombre_distrito", "like", `%${text}%`)
    .orderBy("id_distrito", "desc")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getDistritosByMeta = (id_provincia, nombre_distrito) => {
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
    .where("id_provincia", "=", id_provincia)
    .andWhere("nombre_distrito", "=", nombre_distrito)
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
module.exports.getDistritos = getDistritos;
module.exports.crearDistrito = crearDistrito;
module.exports.getDistritoByid = getDistritoByid;
module.exports.updateDistrito = updateDistrito;
module.exports.getDistritoByIdProvincia = getDistritoByIdProvincia;
module.exports.getDistritosWithPages = getDistritosWithPages;
module.exports.getDistritoBySearch = getDistritoBySearch;
module.exports.getDistritosByMeta = getDistritosByMeta;
module.exports.paginateQueryResults = paginateQueryResults;
