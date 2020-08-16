const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getInventario = () => {
  return database
    .select(
      "i.id_inventario",
      "i.id_pais",
      "i.id_provincia",
      "i.id_distrito",
      "i.id_corregimiento",
      "i.id_feria",
      "i.id_producto",
      "i.total_inicial_disponible",
      "i.disponible_real",
      "i.total_max_diario",
      "i.frecuencia_compra_dias",
      "i.fecha_inicio",
      "i.fecha_fin",
      "i.estado",
      "i.observacion",
      "i.usuario_creacion",
      "i.fecha_creacion",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.nombre_feria",
      "pr.nombre_productos"
    )
    .from("inventario_feria as i")
    .innerJoin("provincia as p", "p.id_provincia", "i.id_provincia")
    .innerJoin("distrito as d", "d.id_distrito", "i.id_distrito")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "i.id_corregimiento")
    .innerJoin("feria as f", "f.id_feria", "i.id_feria")
    .innerJoin("productos as pr", "pr.id_productos", "i.id_producto")
    .orderBy("i.id_inventario", "desc")
    .then((inventarios) => {
      return inventarios;
    })
    .catch((err) => {
      return err;
    });
};

const getInventarioWithPages = (offset, limit) => {
  return database
    .select(
      "i.id_inventario",
      "i.id_pais",
      "i.id_provincia",
      "i.id_distrito",
      "i.id_corregimiento",
      "i.id_feria",
      "i.id_producto",
      "i.total_inicial_disponible",
      "i.disponible_real",
      "i.total_max_diario",
      "i.frecuencia_compra_dias",
      "i.fecha_inicio",
      "i.fecha_fin",
      "i.estado",
      "i.observacion",
      "i.usuario_creacion",
      "i.fecha_creacion",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.nombre_feria",
      "pr.nombre_productos"
    )
    .from("inventario_feria as i")
    .innerJoin("provincia as p", "p.id_provincia", "i.id_provincia")
    .innerJoin("distrito as d", "d.id_distrito", "i.id_distrito")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "i.id_corregimiento")
    .innerJoin("feria as f", "f.id_feria", "i.id_feria")
    .innerJoin("productos as pr", "pr.id_productos", "i.id_producto")
    .limit(limit)
    .offset(offset)
    .orderBy("i.id_inventario", "desc")
    .then((inventarios) => {
      return inventarios;
    })
    .catch((err) => {
      return err;
    });
};

const crearInventario = (
  id_pais,
  id_provincia,
  id_distrito,
  id_corregimiento,
  id_feria,
  id_producto,
  total_inicial_disponible,
  disponible_real,
  total_max_diario,
  frecuencia_compra_dias,
  fecha_inicio,
  fecha_fin,
  observacion,
  estado,
  user
) => {
  return database("inventario_feria")
    .insert({
      id_pais: id_pais,
      id_provincia: id_provincia,
      id_distrito: id_distrito,
      id_corregimiento: id_corregimiento,
      id_feria: id_feria,
      id_producto: id_producto,
      total_inicial_disponible: total_inicial_disponible,
      disponible_real: disponible_real,
      total_max_diario: total_max_diario,
      frecuencia_compra_dias: frecuencia_compra_dias,
      fecha_inicio: fecha_inicio,
      fecha_fin: fecha_fin,
      observacion: observacion,
      estado: estado,
      usuario_creacion: user,
      fecha_creacion: moment().format(),
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getInventarioByid = (id_inventario) => {
  return database
    .select(
      "i.id_inventario",
      "i.id_pais",
      "i.id_provincia",
      "i.id_distrito",
      "i.id_corregimiento",
      "i.id_feria",
      "i.id_producto",
      "i.total_inicial_disponible",
      "i.disponible_real",
      "i.total_max_diario",
      "i.frecuencia_compra_dias",
      "i.fecha_inicio",
      "i.fecha_fin",
      "i.estado",
      "i.observacion",
      "i.usuario_creacion",
      "i.fecha_creacion",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.nombre_feria",
      "pr.nombre_productos"
    )
    .from("inventario_feria as i")
    .innerJoin("provincia as p", "p.id_provincia", "i.id_provincia")
    .innerJoin("distrito as d", "d.id_distrito", "i.id_distrito")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "i.id_corregimiento")
    .innerJoin("feria as f", "f.id_feria", "i.id_feria")
    .innerJoin("productos as pr", "pr.id_productos", "i.id_producto")
    .where("i.id_inventario", "=", id_inventario)
    .then((inventario) => {
      return inventario;
    })
    .catch((err) => {
      return err;
    });
};

const updateInventario = (
  id_pais,
  id_provincia,
  id_distrito,
  id_corregimiento,
  id_feria,
  id_producto,
  total_inicial_disponible,
  disponible_real,
  total_max_diario,
  frecuencia_compra_dias,
  fecha_inicio,
  fecha_fin,
  observacion,
  estado,
  id_inventario
) => {
  return database("inventario_feria")
    .update({
      id_pais: id_pais,
      id_provincia: id_provincia,
      id_distrito: id_distrito,
      id_corregimiento: id_corregimiento,
      id_feria: id_feria,
      id_producto: id_producto,
      total_inicial_disponible: total_inicial_disponible,
      disponible_real: disponible_real,
      total_max_diario: total_max_diario,
      frecuencia_compra_dias: frecuencia_compra_dias,
      fecha_inicio: fecha_inicio,
      fecha_fin: fecha_fin,
      observacion: observacion,
      estado: estado,
    })
    .where("id_inventario", "=", id_inventario)
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

const getInventarioBySearch = (text) => {
  return database
    .select(
      "i.id_inventario",
      "i.id_pais",
      "i.id_provincia",
      "i.id_distrito",
      "i.id_corregimiento",
      "i.id_feria",
      "i.id_producto",
      "i.total_inicial_disponible",
      "i.disponible_real",
      "i.total_max_diario",
      "i.frecuencia_compra_dias",
      "i.fecha_inicio",
      "i.fecha_fin",
      "i.estado",
      "i.observacion",
      "i.usuario_creacion",
      "i.fecha_creacion",
      "p.nombre_provincia",
      "d.nombre_distrito",
      "c.nombre_corregimiento",
      "f.nombre_feria",
      "pr.nombre_productos"
    )
    .from("inventario_feria as i")
    .innerJoin("provincia as p", "p.id_provincia", "i.id_provincia")
    .innerJoin("distrito as d", "d.id_distrito", "i.id_distrito")
    .innerJoin("corregimiento as c", "c.id_corregimiento", "i.id_corregimiento")
    .innerJoin("feria as f", "f.id_feria", "i.id_feria")
    .innerJoin("productos as pr", "pr.id_productos", "i.id_producto")
    .where("i.observacion", "like", `%${text}%`)
    .orWhere("p.nombre_provincia", "like", `%${text}%`)
    .orWhere("d.nombre_distrito", "like", `%${text}%`)
    .orWhere("c.nombre_corregimiento", "like", `%${text}%`)
    .orWhere("f.nombre_feria", "like", `%${text}%`)
    .orWhere("pr.nombre_productos", "like", `%${text}%`)
    .orWhere("i.id_pais", "like", `%${text}%`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getInventarioByMeta = (
  id_pais,
  id_provincia,
  id_distrito,
  id_corregimiento,
  id_feria,
  id_producto,
  total_inicial_disponible,
  disponible_real,
  total_max_diario,
  frecuencia_compra_dias,
  fecha_inicio,
  fecha_fin
) => {
  return database
    .select("*")
    .from("inventario_feria")
    .where("id_pais", "=", id_pais)
    .andWhere("id_provincia", "=", id_provincia)
    .andWhere("id_distrito", "=", id_distrito)
    .andWhere("id_corregimiento", "=", id_corregimiento)
    .andWhere("id_feria", "=", id_feria)
    .andWhere("id_producto", "=", id_producto)
    .andWhere("total_inicial_disponible", "=", total_inicial_disponible)
    .andWhere("disponible_real", "=", disponible_real)
    .andWhere("total_max_diario", "=", total_max_diario)
    .andWhere("frecuencia_compra_dias", "=", frecuencia_compra_dias)
    .andWhere("fecha_inicio", "=", fecha_inicio)
    .andWhere("fecha_fin", "=", fecha_fin)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getInventario = getInventario;
module.exports.getInventarioWithPages = getInventarioWithPages;
module.exports.crearInventario = crearInventario;
module.exports.getInventarioByid = getInventarioByid;
module.exports.updateInventario = updateInventario;
module.exports.paginateQueryResults = paginateQueryResults;
module.exports.getInventarioBySearch = getInventarioBySearch;
module.exports.getInventarioByMeta = getInventarioByMeta;
