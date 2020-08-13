const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getTipoAjustes = () => {
  return database
    .select(
      "id_tipo_ajuste",
      "descripcion",
      "estado",
      "usuario_creacion",
      "fecha_creacion"
    )
    .from("tipos_ajuste")
    .orderBy("fecha_creacion", "desc")
    .then((tipo) => {
      return tipo;
    })
    .catch((err) => {
      return err;
    });
};

const getTipoAjustesWithPages = (offset, limit) => {
  return database
    .select(
      "id_tipo_ajuste",
      "descripcion",
      "estado",
      "usuario_creacion",
      "fecha_creacion"
    )
    .from("tipos_ajuste")
    .limit(limit)
    .offset(offset)
    .orderBy("fecha_creacion", "desc")
    .then((tipo) => {
      return tipo;
    })
    .catch((err) => {
      return err;
    });
};

const crearTipoAjustes = (
  id_tipo_ajuste,
  descripcion,
  estado,
  usuario_creacion
) => {
  return database("tipos_ajuste")
    .insert({
      id_tipo_ajuste: id_tipo_ajuste,
      descripcion: descripcion,
      usuario_creacion: usuario_creacion,
      fecha_creacion: moment().format(),
      estado: estado,
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getTipoAjustesByid = (id_tipo_ajuste) => {
  return database
    .select(
      "id_tipo_ajuste",
      "descripcion",
      "estado",
      "usuario_creacion",
      "fecha_creacion"
    )
    .from("tipos_ajuste")
    .orderBy("fecha_creacion", "desc")
    .where("id_tipo_ajuste", "=", id_tipo_ajuste)
    .then((tipo) => {
      return tipo;
    })
    .catch((err) => {
      return err;
    });
};

const updateTipoAjustes = (id_tipo_ajuste, descripcion, estado) => {
  return database("tipos_ajuste")
    .update({
      descripcion: descripcion,
      estado: estado,
    })
    .where("id_tipo_ajuste", "=", id_tipo_ajuste)
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

const getTipoAjustesBySearch = (text) => {
  return database
    .select(
      "id_tipo_ajuste",
      "descripcion",
      "estado",
      "usuario_creacion",
      "fecha_creacion"
    )
    .from("tipos_ajuste")
    .orderBy("fecha_creacion", "desc")
    .where("id_tipo_ajuste", "like", `%${text}%`)
    .orWhere("descripcion", "like", `%${text}%`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getTipoByMeta = (id_tipo_ajuste, descripcion) => {
  return database
    .select("*")
    .from("tipos_ajuste")
    .where("id_tipo_ajuste", "=", id_tipo_ajuste)
    .andWhere("descripcion", "=", descripcion)
    .then((tipo) => {
      return tipo;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getTipoAjustes = getTipoAjustes;
module.exports.crearTipoAjustes = crearTipoAjustes;
module.exports.getTipoAjustesByid = getTipoAjustesByid;
module.exports.updateTipoAjustes = updateTipoAjustes;
module.exports.getTipoAjustesWithPages = getTipoAjustesWithPages;
module.exports.paginateQueryResults = paginateQueryResults;
module.exports.getTipoAjustesBySearch = getTipoAjustesBySearch;
module.exports.getTipoByMeta = getTipoByMeta;
