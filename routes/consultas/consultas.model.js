const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

//consumo

const getConsumoTotalPorFeriaHoy = () => {
  return database
    .select("f.nombre_feria as feria")
    .count("t.entregado as consumo")
    .from("feria as f")
    .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
    .where("t.entregado", "=", 1)
    .whereBetween("t.fecha_compra", [
      `${moment().format("YYYY-MM-DD")} 00:00:00`,
      `${moment().format("YYYY-MM-DD")} 23:59:59`,
    ])
    .groupBy("f.nombre_feria")
    .orderBy("f.nombre_feria", "asc")
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      return err;
    });
};

const getConsumoTotalPorFeria = () => {
  return database
    .select("f.nombre_feria as feria")
    .count("t.entregado as consumo")
    .from("feria as f")
    .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
    .where("t.entregado", "=", 1)
    .groupBy("f.nombre_feria")
    .orderBy("f.nombre_feria", "asc")
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      return err;
    });
};

const getConsumoTotalPorFeriaPorFecha = (desde, hasta) => {
  return database
    .select("f.nombre_feria as feria")
    .count("t.entregado as consumo")
    .from("feria as f")
    .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
    .where("t.entregado", "=", 1)
    .whereBetween("t.fecha_compra", [
      `${moment(desde).format("YYYY-MM-DD")} 00:00:00`,
      `${moment(hasta).format("YYYY-MM-DD")} 23:59:59`,
    ])
    .groupBy("f.nombre_feria")
    .orderBy("f.nombre_feria", "asc")
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      return err;
    });
};

const getConsumoByFeria = (id_feria) => {
  return database
    .select("f.nombre_feria as feria")
    .count("t.entregado as consumo")
    .from("feria as f")
    .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
    .where("f.id_feria", "=", id_feria)
    .andWhere("t.entregado", "=", 1)
    .groupBy("f.nombre_feria")
    .orderBy("f.nombre_feria", "asc")
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const getConsumoByFeriaByFecha = (id_feria, desde, hasta) => {
  return database
    .select("f.nombre_feria as feria")
    .count("t.entregado as consumo")
    .from("feria as f")
    .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
    .whereBetween("t.fecha_compra", [
      `${moment(desde).format("YYYY-MM-DD")} 00:00:00`,
      `${moment(hasta).format("YYYY-MM-DD")} 23:59:59`,
    ])
    .andWhere("f.id_feria", "=", id_feria)
    .andWhere("t.entregado", "=", 1)
    .groupBy("f.nombre_feria")
    .orderBy("f.nombre_feria", "asc")
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      return err;
    });
};

const getAmountofTrans = () => {
  return database
    .count("entregado as consumo")
    .from("inventario_transaccion")
    .where("entregado", "=", 1)
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      return err;
    });
};

const getAmountofTransFecha = (desde, hasta) => {
  return database
    .count("entregado as consumo")
    .from("inventario_transaccion")
    .where("entregado", "=", 1)
    .whereBetween("fecha_compra", [
      `${moment(desde).format("YYYY-MM-DD")} 00:00:00`,
      `${moment(hasta).format("YYYY-MM-DD")} 23:59:59`,
    ])
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      return err;
    });
};

//clientes

const getClientesTotalesPorFeriaHoy = () => {
  //dashboard
  return database
    .select("a.id_feria", "b.nombre_feria")
    .count("a.id_cliente as clientes")
    .from("inventario_transaccion as a")
    .innerJoin("feria as b", "b.id_feria", "a.id_feria")
    .innerJoin("productos as c", "a.id_producto", "c.id_productos")
    .whereBetween("a.fecha_compra", [
      `${moment().format("YYYY-MM-DD")} 00:00:00`,
      `${moment().format("YYYY-MM-DD")} 23:59:59`,
    ])
    .groupBy("a.id_feria", "b.nombre_feria")
    .orderBy("b.nombre_feria", "asc")
    .then((clientes) => {
      return clientes;
    })
    .catch((err) => {
      return err;
    });
};

const getClientesTotalesPorFeria = () => {
  //dashboard
  return database
    .select("a.id_feria", "b.nombre_feria")
    .count("a.id_cliente as clientes")
    .from("inventario_transaccion as a")
    .innerJoin("feria as b", "b.id_feria", "a.id_feria")
    .innerJoin("productos as c", "a.id_producto", "c.id_productos")
    .groupBy("a.id_feria", "b.nombre_feria")
    .orderBy("b.nombre_feria", "asc")
    .then((clientes) => {
      return clientes;
    })
    .catch((err) => {
      return err;
    });
};

const getClientesTotalesPorFeriaPorFecha = (desde, hasta) => {
  //consulta
  return database
    .select("a.id_feria", "b.nombre_feria")
    .count("a.id_cliente as clientes")
    .from("inventario_transaccion as a")
    .innerJoin("feria as b", "b.id_feria", "a.id_feria")
    .innerJoin("productos as c", "a.id_producto", "c.id_productos")
    .whereBetween("a.fecha_compra", [
      `${moment(desde).format("YYYY-MM-DD")} 00:00:00`,
      `${moment(hasta).format("YYYY-MM-DD")} 23:59:59`,
    ])
    .groupBy("a.id_feria", "b.nombre_feria")
    .orderBy("b.nombre_feria", "asc")
    .then((clientes) => {
      return clientes;
    })
    .catch((err) => {
      return err;
    });
};

const getCantidadClientesByFeria = (id_feria) => {
  //consulta
  return database
    .select("a.id_feria", "b.nombre_feria")
    .count("a.id_cliente as clientes")
    .from("inventario_transaccion as a")
    .innerJoin("feria as b", "b.id_feria", "a.id_feria")
    .innerJoin("productos as c", "a.id_producto", "c.id_productos")
    .where("a.id_feria", "=", id_feria)
    .groupBy("a.id_feria", "b.nombre_feria")
    .orderBy("b.nombre_feria", "asc")
    .then((clientes) => {
      return clientes;
    })
    .catch((err) => {
      return err;
    });
};

const getCantidadClientesByFeriaByfecha = (id_feria, desde, hasta) => {
  //consulta
  return database
    .select("a.id_feria", "b.nombre_feria")
    .count("a.id_cliente as clientes")
    .from("inventario_transaccion as a")
    .innerJoin("feria as b", "b.id_feria", "a.id_feria")
    .innerJoin("productos as c", "a.id_producto", "c.id_productos")
    .whereBetween("a.fecha_compra", [
      `${moment(desde).format("YYYY-MM-DD")} 00:00:00`,
      `${moment(hasta).format("YYYY-MM-DD")} 23:59:59`,
    ])
    .andWhere("a.id_feria", "=", id_feria)
    .groupBy("a.id_feria", "b.nombre_feria")
    .orderBy("b.nombre_feria", "asc")
    .then((clientes) => {
      return clientes;
    })
    .catch((err) => {
      return err;
    });
};

const getDisponibleRealByFeriaByProductos = (
  id_producto,
  id_feria,
  desde,
  hasta,
) => {
  return database
    .select("disponible_real ")
    .from("inventario_feria")
    .where("fecha_inicio", "<=", desde)
    .andWhere("fecha_fin", ">=", hasta)
    .andWhere("estado", "=", 1)
    .andWhere("id_feria", "=", id_feria)
    .andWhere("id_producto", "=", id_producto)
    .orderBy("id_inventario", "asc")
    .limit(1)
    .then((disponible) => {
      return disponible;
    })
    .catch((err) => {
      return err;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.getConsumoTotalPorFeria = getConsumoTotalPorFeria;
module.exports.getConsumoTotalPorFeriaPorFecha = getConsumoTotalPorFeriaPorFecha;
module.exports.getConsumoByFeria = getConsumoByFeria;
module.exports.getConsumoByFeriaByFecha = getConsumoByFeriaByFecha;
module.exports.getAmountofTrans = getAmountofTrans;
module.exports.getAmountofTransFecha = getAmountofTransFecha;
module.exports.getConsumoTotalPorFeriaHoy = getConsumoTotalPorFeriaHoy;

module.exports.getClientesTotalesPorFeria = getClientesTotalesPorFeria;
module.exports.getClientesTotalesPorFeriaPorFecha = getClientesTotalesPorFeriaPorFecha;
module.exports.getCantidadClientesByFeria = getCantidadClientesByFeria;
module.exports.getCantidadClientesByFeriaByfecha = getCantidadClientesByFeriaByfecha;
module.exports.getClientesTotalesPorFeriaHoy = getClientesTotalesPorFeriaHoy;

//disponible real
module.exports.getDisponibleRealByFeriaByProductos = getDisponibleRealByFeriaByProductos;
