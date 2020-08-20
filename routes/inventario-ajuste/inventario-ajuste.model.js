const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getInventarioAjuste = () => {
  return database
    .select(
      "i.id",
      "i.id_inventario",
      "i.id_feria",
      "i.id_tipo_ajuste",
      "i.cantidad_ajuste",
      "i.usuario_ajuste",
      "i.fecha_ajuste",
      "f.nombre_feria",
      "i.observacion"
    )
    .from("inventario_feria_ajuste as i")
    .innerJoin("feria as f", "f.id_feria", "i.id_feria")
    .where("i.estado", "=", 1)
    .orderBy("i.id", "desc")
    .then((inventarios_ajuste) => {
      return inventarios_ajuste;
    })
    .catch((err) => {
      return err;
    });
};

const getInventarioAjusteWithPages = (offset, limit) => {
  return database
    .select(
      "i.id",
      "i.id_inventario",
      "i.id_feria",
      "i.id_tipo_ajuste",
      "i.cantidad_ajuste",
      "i.usuario_ajuste",
      "i.fecha_ajuste",
      "f.nombre_feria",
      "i.observacion"
    )
    .from("inventario_feria_ajuste as i")
    .innerJoin("feria as f", "f.id_feria", "i.id_feria")
    .limit(limit)
    .offset(offset)
    .orderBy("i.id", "desc")
    .then((inventarios_ajuste) => {
      return inventarios_ajuste;
    })
    .catch((err) => {
      return err;
    });
};

const crearInventarioAjuste = (
  id_inventario,
  id_feria,
  id_tipo_ajuste,
  cantidad_ajuste,
  observacion,
  user
) => {
  return database("inventario_feria_ajuste")
    .insert({
      id_inventario: id_inventario,
      id_feria: id_feria,
      id_tipo_ajuste: id_tipo_ajuste,
      cantidad_ajuste: cantidad_ajuste,
      observacion: observacion,
      usuario_ajuste: user,
      fecha_ajuste: moment().format(),
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getInventarioAjusteByid = (id) => {
  return database
    .select(
      "i.id",
      "i.id_inventario",
      "i.id_feria",
      "i.id_tipo_ajuste",
      "i.cantidad_ajuste",
      "i.usuario_ajuste",
      "i.fecha_ajuste",
      "f.nombre_feria",
      "i.observacion"
    )
    .from("inventario_feria_ajuste as i")
    .innerJoin("feria as f", "f.id_feria", "i.id_feria")
    .where("i.id", "=", id)
    .then((inventario_ajuste) => {
      return inventario_ajuste;
    })
    .catch((err) => {
      return err;
    });
};

const updateInventarioAjuste = (
  id,
  id_inventario,
  id_feria,
  id_tipo_ajuste,
  cantidad_ajuste,
  observacion
) => {
  return database("inventario_feria_ajuste")
    .update({
      id_inventario: id_inventario,
      id_feria: id_feria,
      id_tipo_ajuste: id_tipo_ajuste,
      cantidad_ajuste: cantidad_ajuste,
      observacion: observacion,
    })
    .where("id", "=", id)
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

const getInventarioAjusteBySearch = (text) => {
  return database
    .select(
      "i.id",
      "i.id_inventario",
      "i.id_feria",
      "i.id_tipo_ajuste",
      "i.cantidad_ajuste",
      "i.usuario_ajuste",
      "i.fecha_ajuste",
      "f.nombre_feria",
      "i.observacion"
    )
    .from("inventario_feria_ajuste as i")
    .innerJoin("feria as f", "f.id_feria", "i.id_feria")
    .where("i.id", "like", `%${text}%`)
    .orWhere("i.id_tipo_ajuste", "like", `%${text}%`)
    .orWhere("i.id_inventario", "like", `%${text}%`)
    .orWhere("f.nombre_feria", "like", `%${text}%`)
    .orWhere("i.observacion", "like", `%${text}%`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getInventarioAjusteByMeta = (
  id_inventario,
  id_feria,
  id_tipo_ajuste,
  cantidad_ajuste,
  observacion
) => {
  return database
    .select("*")
    .from("inventario_feria_ajuste")
    .where("id_inventario", "=", id_inventario)
    .andWhere("id_feria", "=", id_feria)
    .andWhere("id_tipo_ajuste", "=", id_tipo_ajuste)
    .andWhere("cantidad_ajuste", "=", cantidad_ajuste)
    .andWhere("observacion", "=", observacion)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getInventarioAjuste = getInventarioAjuste;
module.exports.getInventarioAjusteWithPages = getInventarioAjusteWithPages;
module.exports.crearInventarioAjuste = crearInventarioAjuste;
module.exports.getInventarioAjusteByid = getInventarioAjusteByid;
module.exports.updateInventarioAjuste = updateInventarioAjuste;
module.exports.paginateQueryResults = paginateQueryResults;
module.exports.getInventarioAjusteBySearch = getInventarioAjusteBySearch;
module.exports.getInventarioAjusteByMeta = getInventarioAjusteByMeta;
