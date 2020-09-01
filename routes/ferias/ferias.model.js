const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getFeria = () => {
  return database
    .select(
      "f.id_feria",
      "f.nombre_feria",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.descripcion_lugar",
      "f.descripcion_feria",
      "f.estado",
    )
    .from("feria as f")
    .innerJoin("distrito as d", "d.id_distrito", "f.id_distrito")
    .innerJoin("provincia as p", "p.id_provincia", "f.id_provincia")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "f.id_corregimiento")
    .where("f.estado", "=", 1)
    .orderBy("id_feria", "desc")
    .then((feria) => {
      return feria;
    })
    .catch((err) => {
      return err;
    });
};

const getFeriaWithPages = (offset, limit) => {
  return database
    .select(
      "f.id_feria",
      "f.nombre_feria",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.descripcion_lugar",
      "f.descripcion_feria",
      "f.estado",
    )
    .from("feria as f")
    .innerJoin("distrito as d", "d.id_distrito", "f.id_distrito")
    .innerJoin("provincia as p", "p.id_provincia", "f.id_provincia")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "f.id_corregimiento")
    .limit(limit)
    .offset(offset)
    .orderBy("id_feria", "desc")
    .then((feria) => {
      return feria;
    })
    .catch((err) => {
      return err;
    });
};

const crearFeria = (
  nombre_feria,
  id_provincia,
  id_distrito,
  id_corregimiento,
  descripcion_lugar,
  descripcion_feria,
  estado,
  user,
) => {
  return database("feria")
    .insert({
      nombre_feria: nombre_feria,
      id_provincia: id_provincia,
      id_distrito: id_distrito,
      id_corregimiento: id_corregimiento,
      descripcion_lugar: descripcion_lugar,
      descripcion_feria: descripcion_feria,
      usuario_creacion: user,
      estado: estado,
      fecha_creacion: moment().format("YYYY-MM-DD HH:mm:ss"),
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getFeriaByid = (id_feria) => {
  return database
    .select(
      "f.id_feria",
      "f.nombre_feria",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.descripcion_lugar",
      "f.descripcion_feria",
      "f.estado",
      "f.id_provincia",
      "f.id_distrito",
      "f.id_corregimiento",
    )
    .from("feria as f")
    .innerJoin("distrito as d", "d.id_distrito", "f.id_distrito")
    .innerJoin("provincia as p", "p.id_provincia", "f.id_provincia")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "f.id_corregimiento")
    .where("id_feria", "=", id_feria)
    .orderBy("id_feria", "desc")
    .then((feria) => {
      return feria;
    })
    .catch((err) => {
      return err;
    });
};

const getFeriaByidProvincia = (id_provincia) => {
  return database
    .select(
      "f.id_feria",
      "f.nombre_feria",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.descripcion_lugar",
      "f.descripcion_feria",
      "f.estado",
      "f.id_provincia",
      "f.id_distrito",
      "f.id_corregimiento",
    )
    .from("feria as f")
    .innerJoin("distrito as d", "d.id_distrito", "f.id_distrito")
    .innerJoin("provincia as p", "p.id_provincia", "f.id_provincia")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "f.id_corregimiento")
    .where("f.id_provincia", "=", id_provincia)
    .orderBy("id_feria", "desc")
    .then((feria) => {
      return feria;
    })
    .catch((err) => {
      return err;
    });
};

const updateFeria = (
  id_feria,
  nombre_feria,
  id_provincia,
  id_distrito,
  id_corregimiento,
  descripcion_lugar,
  descripcion_feria,
  estado,
) => {
  return database("feria")
    .update({
      nombre_feria: nombre_feria,
      id_corregimiento: id_corregimiento,
      id_provincia: id_provincia,
      descripcion_lugar: descripcion_lugar,
      descripcion_feria: descripcion_feria,
      id_distrito: id_distrito,
      estado: estado,
    })
    .where("id_feria", "=", id_feria)
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

const getFeriaBySearch = (text) => {
  return database
    .select(
      "f.id_feria",
      "f.nombre_feria",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.descripcion_lugar",
      "f.descripcion_feria",
      "f.estado",
    )
    .from("feria as f")
    .innerJoin("distrito as d", "d.id_distrito", "f.id_distrito")
    .innerJoin("provincia as p", "p.id_provincia", "f.id_provincia")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "f.id_corregimiento")
    .where("c.nombre_corregimiento", "like", `%${text}%`)
    .orWhere("d.nombre_distrito", "like", `%${text}%`)
    .orWhere("p.nombre_provincia", "like", `%${text}%`)
    .orWhere("f.nombre_feria", "like", `%${text}%`)
    .orWhere("f.descripcion_lugar", "like", `%${text}%`)
    .orWhere("f.descripcion_feria", "like", `%${text}%`)
    .orWhere("f.estado", "=", 1)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getFeriaByMeta = async (
  nombre_feria,
  id_provincia,
  id_distrito,
  id_corregimiento,
  descripcion_lugar,
) => {
  return database
    .select("*")
    .from("feria")
    .where("nombre_feria", "=", nombre_feria)
    .andWhere("id_provincia", "=", id_provincia)
    .andWhere("id_distrito", "=", id_distrito)
    .andWhere("id_corregimiento", "=", id_corregimiento)
    .andWhere("descripcion_lugar", "=", descripcion_lugar)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getFeria = getFeria;
module.exports.crearFeria = crearFeria;
module.exports.getFeriaByid = getFeriaByid;
module.exports.updateFeria = updateFeria;
module.exports.getFeriaWithPages = getFeriaWithPages;
module.exports.paginateQueryResults = paginateQueryResults;
module.exports.getFeriaBySearch = getFeriaBySearch;
module.exports.getFeriaByMeta = getFeriaByMeta;
module.exports.getFeriaByidProvincia = getFeriaByidProvincia;
