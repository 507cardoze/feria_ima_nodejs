const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getClientes = () => {
  return database
    .select("*")
    .from("clientes")
    .orderBy("id_cliente", "desc")
    .then((cliente) => {
      return cliente;
    })
    .catch((err) => {
      return err;
    });
};

const getClientesWithPages = (offset, limit) => {
  return database
    .select("*")
    .from("clientes")
    .limit(limit)
    .offset(offset)
    .orderBy("id_cliente", "desc")
    .then((cliente) => {
      return cliente;
    })
    .catch((err) => {
      return err;
    });
};

const crearClientes = (
  num_documento,
  nombre,
  apellido,
  genero,
  fecha_nacimiento,
  nacionalidad,
  lugar_nacimiento,
  tipo_sangre,
  direccion,
  fecha_expiracion,
  usuario_creacion,
) => {
  return database("clientes")
    .insert({
      num_documento: num_documento,
      nombre: nombre,
      apellido: apellido,
      genero: genero,
      fecha_nacimiento: moment(fecha_nacimiento).format("YYYY-MM-DD HH:mm:ss"),
      nacionalidad: nacionalidad,
      lugar_nacimiento: lugar_nacimiento,
      tipo_sangre: tipo_sangre,
      direccion: direccion,
      fecha_expiracion: moment(fecha_expiracion).format("YYYY-MM-DD HH:mm:ss"),
      usuario_creacion: usuario_creacion,
      fecha_creacion: moment().format("YYYY-MM-DD HH:mm:ss"),
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getClienteByid = (id_cliente) => {
  return database
    .select("*")
    .from("clientes")
    .where("id_cliente", "=", id_cliente)
    .then((clientes) => {
      return clientes;
    })
    .catch((err) => {
      return err;
    });
};

const updateTipoAjustes = (
  num_documento,
  nombre,
  apellido,
  genero,
  fecha_nacimiento,
  nacionalidad,
  lugar_nacimiento,
  tipo_sangre,
  direccion,
  fecha_expiracion,
  id_cliente,
) => {
  return database("clientes")
    .update({
      num_documento: num_documento,
      nombre: nombre,
      apellido: apellido,
      genero: genero,
      fecha_nacimiento: moment(fecha_nacimiento).format("YYYY-MM-DD HH:mm:ss"),
      nacionalidad: nacionalidad,
      lugar_nacimiento: lugar_nacimiento,
      tipo_sangre: tipo_sangre,
      direccion: direccion,
      fecha_expiracion: moment(fecha_expiracion).format("YYYY-MM-DD HH:mm:ss"),
    })
    .where("id_cliente", "=", id_cliente)
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

const getClienteBySearch = (text) => {
  return database
    .select("*")
    .from("clientes")
    .orderBy("id_cliente", "desc")
    .where("num_documento", "like", `%${text}%`)
    .orWhere("nombre", "like", `%${text}%`)
    .orWhere("apellido", "like", `%${text}%`)
    .orWhere("lugar_nacimiento", "like", `%${text}%`)
    .orWhere("direccion", "like", `%${text}%`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getClientesByMeta = (num_documento, nombre, apellido) => {
  return database
    .select("*")
    .from("clientes")
    .where("num_documento", "=", num_documento)
    .andWhere("nombre", "=", nombre)
    .andWhere("apellido", "=", apellido)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getClientes = getClientes;
module.exports.getClientesWithPages = getClientesWithPages;
module.exports.crearClientes = crearClientes;
module.exports.getClienteByid = getClienteByid;
module.exports.updateTipoAjustes = updateTipoAjustes;
module.exports.paginateQueryResults = paginateQueryResults;
module.exports.getClienteBySearch = getClienteBySearch;
module.exports.getClientesByMeta = getClientesByMeta;
