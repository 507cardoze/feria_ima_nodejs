const { database } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getConsumoTotalPorFeria = () => {
  return database
    .select("f.nombre_feria as feria")
    .count("t.entregado as consumo")
    .from("feria as f")
    .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
    .where("t.entregado", "=", 1)
    .groupBy("f.nombre_feria")
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      return err;
    });
};

// const getConsumoTotalPorFeriaPorFecha = (desde, hasta) => {
//   return database
//     .select("f.nombre_feria as feria")
//     .count("t.id_transaccion as consumo")
//     .from("feria as f")
//     .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
//     .where("t.fecha_compra", "<", desde)
//     .orWhere("t.fecha_compra", ">", hasta)
//     .groupBy("f.nombre_feria")
//     .then((consumos) => {
//       return consumos;
//     })
//     .catch((err) => {
//       return err;
//     });
// };

const getConsumoTotalPorFeriaPorFecha = (desde, hasta) => {
  return database
    .select("f.nombre_feria as feria")
    .count("t.entregado as consumo")
    .from("feria as f")
    .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
    .where("t.entregado", "=", 1)
    .whereBetween("t.fecha_compra", [desde, hasta])
    .groupBy("f.nombre_feria")
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
    .then((consumos) => {
      return consumos;
    })
    .catch((err) => {
      return err;
    });
};

const getConsumoByFeriaByFecha = (id_feria, desde, hasta) => {
  return database
    .select("f.nombre_feria as feria")
    .count("t.entregado as consumo")
    .from("feria as f")
    .leftJoin("inventario_transaccion as t", "t.id_feria", "f.id_feria")
    .whereBetween("t.fecha_compra", [desde, hasta])
    .andWhere("f.id_feria", "=", id_feria)
    .andWhere("t.entregado", "=", 1)
    .groupBy("f.nombre_feria")
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
    .whereBetween("fecha_compra", [desde, hasta])
    .then((consumos) => {
      return consumos;
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
