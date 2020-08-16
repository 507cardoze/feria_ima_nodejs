const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getProductos = () => {
  return database
    .select("*")
    .from("productos")
    .orderBy("id_productos", "desc")
    .then((productos) => {
      return productos;
    })
    .catch((err) => {
      return err;
    });
};

const getProductosWithPages = (offset, limit) => {
  return database
    .select("*")
    .from("productos")
    .limit(limit)
    .offset(offset)
    .orderBy("id_productos", "desc")
    .then((productos) => {
      return productos;
    })
    .catch((err) => {
      return err;
    });
};

const crearProductos = (
  nombre_productos,
  frecuencia_compra_dias,
  estado,
  user
) => {
  return database("productos")
    .insert({
      nombre_productos: nombre_productos,
      frecuencia_compra_dias: frecuencia_compra_dias,
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

const getProductoByid = (id_productos) => {
  return database
    .select("*")
    .from("productos")
    .where("id_productos", "=", id_productos)
    .then((productos) => {
      return productos;
    })
    .catch((err) => {
      return err;
    });
};

const updateProductos = (
  nombre_productos,
  frecuencia_compra_dias,
  estado,
  id_productos
) => {
  return database("productos")
    .update({
      nombre_productos: nombre_productos,
      frecuencia_compra_dias: frecuencia_compra_dias,
      estado: estado,
    })
    .where("id_productos", "=", id_productos)
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

const getProductosBySearch = (text) => {
  return database
    .select("*")
    .from("productos")
    .orderBy("id_productos", "desc")
    .where("nombre_productos", "like", `%${text}%`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getProductosByMeta = (nombre_productos, frecuencia_compra_dias) => {
  return database
    .select("*")
    .from("productos")
    .where("nombre_productos", "=", nombre_productos)
    .andWhere("frecuencia_compra_dias", "=", frecuencia_compra_dias)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getProductos = getProductos;
module.exports.getProductosWithPages = getProductosWithPages;
module.exports.crearProductos = crearProductos;
module.exports.getProductoByid = getProductoByid;
module.exports.updateProductos = updateProductos;
module.exports.paginateQueryResults = paginateQueryResults;
module.exports.getProductosBySearch = getProductosBySearch;
module.exports.getProductosByMeta = getProductosByMeta;
