const { database_misiones } = require("../../database/database");
const moment = require("moment");
require("moment/locale/es.js");

const getAllMisionesAereas = () => {
  return database_misiones
    .select(
      "mision.id",
      "mision.id_aeronave",
      "aeronave.matricula",
      "aeronave.modelo",
      "aeronave.flota",
      "aeronave.propietario",
      "aeronave.costo",
      "mision.id_provincia",
      "provincias.nombre as provincia",
      "provincias.latitud",
      "provincias.longitud",
      "mision.ubicacion",
      "mision.id_operativo",
      "operativo.nombre as operativo",
      "mision.id_status_mision as id_status",
      "status_mision.nombre as status_mision",
      "mision.descripcion",
      "mision.hora_solicitud",
      "mision.hora_vuelo",
      "mision.hora_tierra",
      "mision.diurno_horas",
      "mision.nocturno_horas",
      "mision.manto_observacion",
      "mision.piloto_observacion"
    )
    .from("mision")
    .innerJoin("aeronave", "mision.id_aeronave", "aeronave.id")
    .innerJoin("provincias", "mision.id_provincia", "provincias.id")
    .innerJoin("operativo", "mision.id_operativo", "operativo.id")
    .innerJoin("status_mision", "mision.id_status_mision", "status_mision.id")
    .orderBy("id", "desc")
    .then((data) => {
      if (data.length === 0) return false;
      return data;
    })
    .catch((err) => {
      return false;
    });
};

const getMisionById = (id_mision) => {
  return database_misiones
    .select(
      "mision.id",
      "mision.id_aeronave",
      "aeronave.matricula",
      "aeronave.modelo",
      "aeronave.flota",
      "aeronave.propietario",
      "aeronave.costo",
      "mision.id_provincia",
      "provincias.nombre as provincia",
      "provincias.latitud",
      "provincias.longitud",
      "mision.ubicacion",
      "mision.id_operativo",
      "operativo.nombre as operativo",
      "mision.id_status_mision as id_status",
      "status_mision.nombre as status_mision",
      "mision.descripcion",
      "mision.hora_solicitud",
      "mision.hora_vuelo",
      "mision.hora_tierra",
      "mision.diurno_horas",
      "mision.nocturno_horas",
      "mision.manto_observacion",
      "mision.piloto_observacion"
    )
    .from("mision")
    .innerJoin("aeronave", "mision.id_aeronave", "aeronave.id")
    .innerJoin("provincias", "mision.id_provincia", "provincias.id")
    .innerJoin("operativo", "mision.id_operativo", "operativo.id")
    .innerJoin("status_mision", "mision.id_status_mision", "status_mision.id")
    .where("mision.id", "=", id_mision)
    .then((data) => {
      if (data.length === 0) return false;
      return data;
    })
    .catch((err) => {
      return false;
    });
};

const getDetalleMisionById = (id_mision) => {
  return database_misiones
    .select(
      "d.id as id",
      "d.id_mision",
      "d.id_tipo_mision",
      "t.nombre as tipo_mision",
      "d.id_provincia",
      "p.nombre as provincia",
      "d.id_status",
      "s.nombre as status",
      "d.ubicacion",
      "d.fecha",
      "d.id_entidad",
      "e.nombre as entidad",
      "d.hora_piloto",
      "d.peso",
      "d.pax"
    )
    .from("detalle_mision as d")
    .innerJoin("tipo_mision as t", "t.id", "d.id_tipo_mision")
    .innerJoin("provincias as p", "p.id", "d.id_provincia")
    .innerJoin("status_mision as s", "s.id", "d.id_status")
    .innerJoin("entidades as e", "e.id", "d.id_entidad")
    .where("id_mision", "=", id_mision)
    .orderBy("d.id", "asc")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return false;
    });
};

const getDetalleMisionByIdNotStatusUno = (id_mision) => {
  return database_misiones
    .select(
      "d.id_tipo_mision",
      "t.nombre as tipo_mision",
      "d.id_provincia",
      "p.nombre as provincia",
      "d.id_status",
      "s.nombre as status",
      "d.id_entidad",
      "e.nombre as entidad",
      "d.hora_piloto"
    )
    .from("detalle_mision as d")
    .innerJoin("tipo_mision as t", "t.id", "d.id_tipo_mision")
    .innerJoin("provincias as p", "p.id", "d.id_provincia")
    .innerJoin("status_mision as s", "s.id", "d.id_status")
    .innerJoin("entidades as e", "e.id", "d.id_entidad")
    .where("id_mision", "=", id_mision)
    .andWhere("id_status", "!=", 1)
    .orderBy("d.id", "asc")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return false;
    });
};

const saveMision = (
  id_aeronave,
  id_provincia,
  id_operativo,
  ubicacion,
  descripcion,
  id_user
) => {
  return database_misiones("mision")
    .insert({
      id_aeronave: id_aeronave,
      id_provincia: id_provincia,
      id_operativo: id_operativo,
      ubicacion: ubicacion,
      descripcion: descripcion,
      hora_solicitud: moment().format(),
      id_status_mision: 1,
      id_creador: id_user,
    })
    .then((mision) => {
      return mision;
    })
    .catch((err) => {
      return false;
    });
};

const updateMision = (
  id_mision,
  id_provincia,
  ubicacion,
  id_status,
  hora_vuelo = 0,
  hora_tierra = 0,
  hora_vuelo_manto = 0,
  hora_tierra_manto = 0,
  diurno_horas = 0,
  nocturno_horas = 0,
  observacion_piloto = "",
  observacion_manto = ""
) => {
  return database_misiones("mision")
    .where("id", "=", id_mision)
    .update({
      id_provincia: id_provincia,
      ubicacion: ubicacion,
      id_status_mision: id_status,
      hora_vuelo: hora_vuelo,
      hora_tierra: hora_tierra,
      horas_vuelo_manto: hora_vuelo_manto,
      horas_tierra_manto: hora_tierra_manto,
      diurno_horas: diurno_horas,
      nocturno_horas: nocturno_horas,
      manto_observacion: observacion_manto,
      piloto_observacion: observacion_piloto,
    })
    .then((mision) => {
      return mision;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

const saveDetalleMision = (id_mision, id_provincia, ubicacion) => {
  database_misiones("detalle_mision")
    .insert({
      id_mision: id_mision,
      id_tipo_mision: 1,
      id_provincia: id_provincia,
      id_status: 1,
      ubicacion: ubicacion,
      fecha: moment().format(),
      id_entidad: 1,
    })
    .then((detalle) => {
      return detalle;
    })
    .catch((err) => {
      return false;
    });
};

const getLastDetalle = (id_mision) => {
  return database_misiones
    .select(
      "id",
      "id_mision",
      "id_status",
      "fecha",
      "ubicacion",
      "id_provincia",
      "id_tipo_mision",
      "hora_piloto",
      "peso",
      "pax"
    )
    .from("detalle_mision")
    .where("id_mision", "=", id_mision)
    .orderBy("fecha", "desc")
    .limit("1")
    .then((detalle) => {
      return detalle;
    })
    .catch((err) => {
      return false;
    });
};

const getUltimasDetalle = (
  id_mision,
  fecha,
  id_provincia,
  id_status,
  ubicacion
) => {
  return database_misiones
    .select(
      "id",
      "id_mision",
      "id_provincia",
      "id_status",
      "ubicacion",
      "id_entidad",
      "id_tipo_mision",
      "fecha",
      "hora_piloto",
      "peso",
      "pax"
    )
    .from("detalle_mision")
    .where("fecha", "=", fecha)
    .andWhere("id_provincia", "=", id_provincia)
    .andWhere("id_status", "=", id_status)
    .andWhere("ubicacion", "=", ubicacion)
    .andWhere("id_mision", "=", id_mision)
    .orderBy("id", "desc")
    .then((detalle) => {
      return detalle;
    })
    .catch((err) => {
      return false;
    });
};

const saveDespegue = (id_mision, entidades, fecha, id_provincia, ubicacion) => {
  entidades.map((entidad) => {
    const { id_tipo, id } = entidad;
    database_misiones("detalle_mision")
      .insert({
        id_mision: id_mision,
        id_tipo_mision: id_tipo,
        id_provincia: id_provincia,
        id_status: 3,
        ubicacion: ubicacion,
        fecha: moment(fecha).format(),
        id_entidad: id,
      })
      .then((entidad) => {
        return entidad;
      })
      .catch((err) => {
        return err;
      });
  });
};

const saveAterrizaje = (
  getUltimasDetalles,
  ubicacion,
  fecha,
  id_provincia,
  id_mision
) => {
  getUltimasDetalles.map((data) => {
    const { id_tipo_mision, id_entidad } = data;
    database_misiones("detalle_mision")
      .insert({
        id_mision: id_mision,
        id_tipo_mision: id_tipo_mision,
        id_provincia: id_provincia,
        id_status: 2,
        ubicacion: ubicacion,
        fecha: moment(fecha).format(),
        id_entidad: id_entidad,
      })
      .then((entidad) => {
        return entidad;
      })
      .catch((err) => {
        return err;
      });
  });
};

const cancelMision = (id_mision, id_user, nombre, apellido, cedula, motivo) => {
  return database_misiones("manifest")
    .insert({
      id_mision: id_mision,
      hora_cancel: moment().format(),
      id_user: id_user,
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      motivo: motivo,
    })
    .then((mision) => {
      return mision;
    })
    .catch((err) => {
      return err;
    });
};

const getMisionById_Status = (id_status) => {
  return database_misiones
    .select(
      "mision.id",
      "mision.id_aeronave",
      "aeronave.matricula",
      "aeronave.modelo",
      "aeronave.flota",
      "aeronave.propietario",
      "aeronave.costo",
      "mision.id_provincia",
      "provincias.nombre as provincia",
      "provincias.latitud",
      "provincias.longitud",
      "mision.ubicacion",
      "mision.id_operativo",
      "operativo.nombre as operativo",
      "mision.id_status_mision as id_status",
      "status_mision.nombre as status_mision",
      "mision.descripcion",
      "mision.hora_solicitud",
      "mision.hora_vuelo",
      "mision.hora_tierra",
      "mision.diurno_horas",
      "mision.nocturno_horas",
      "mision.manto_observacion",
      "mision.piloto_observacion"
    )
    .from("mision")
    .innerJoin("aeronave", "mision.id_aeronave", "aeronave.id")
    .innerJoin("provincias", "mision.id_provincia", "provincias.id")
    .innerJoin("operativo", "mision.id_operativo", "operativo.id")
    .innerJoin("status_mision", "mision.id_status_mision", "status_mision.id")
    .where("mision.id_status_mision", "=", id_status)
    .then((data) => {
      if (data.length === 0) return false;
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getMisionForControlAereo = () => {
  return database_misiones
    .select(
      "mision.id",
      "mision.id_aeronave",
      "aeronave.matricula",
      "aeronave.modelo",
      "aeronave.flota",
      "aeronave.propietario",
      "aeronave.costo",
      "mision.id_provincia",
      "provincias.nombre as provincia",
      "provincias.latitud",
      "provincias.longitud",
      "mision.ubicacion",
      "mision.id_operativo",
      "operativo.nombre as operativo",
      "mision.id_status_mision as id_status",
      "status_mision.nombre as status_mision",
      "mision.descripcion",
      "mision.hora_solicitud",
      "mision.hora_vuelo",
      "mision.hora_tierra",
      "mision.diurno_horas",
      "mision.nocturno_horas",
      "mision.manto_observacion",
      "mision.piloto_observacion"
    )
    .from("mision")
    .innerJoin("aeronave", "mision.id_aeronave", "aeronave.id")
    .innerJoin("provincias", "mision.id_provincia", "provincias.id")
    .innerJoin("operativo", "mision.id_operativo", "operativo.id")
    .innerJoin("status_mision", "mision.id_status_mision", "status_mision.id")
    .where("mision.id_status_mision", "=", 1)
    .orWhere("mision.id_status_mision", "=", 2)
    .orWhere("mision.id_status_mision", "=", 3)
    .then((data) => {
      if (data.length === 0) return false;
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getManifest = (id_mision) => {
  return database_misiones
    .select("*")
    .from("manifest")
    .where("id_mision", "=", id_mision)
    .then((data) => {
      if (data.length === 0) return false;
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const getPilotosPiernas = (id_mision) => {
  return database_misiones
    .select(
      "d.id as id",
      "d.id_mision",
      "d.id_provincia",
      "d.id_tipo_mision",
      "d.id_entidad",
      "p.nombre as provincia",
      "d.id_status",
      "s.nombre as status",
      "d.ubicacion",
      "d.fecha",
      "d.hora_piloto",
      "d.hora_manto",
      "d.peso",
      "d.pax"
    )
    .from("detalle_mision as d")
    .innerJoin("provincias as p", "p.id", "d.id_provincia")
    .innerJoin("status_mision as s", "s.id", "d.id_status")
    .where("id_mision", "=", id_mision)
    .whereNot("d.id_status", "=", 1)
    .groupBy("d.fecha")
    .orderBy("d.id", "asc")
    .then((data) => {
      if (data.length === 0) return false;
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const isOdd = (num) => {
  return num % 2;
};

const calcularHorasVuelo = (array) => {
  let horas = {
    hora_vuelo: 0,
    hora_tierra: 0,
  };

  array.forEach((value, i) => {
    if (i <= array.length - 2) {
      let a = moment(value.fecha);
      let b = moment(array[i + 1].fecha);
      let hours = b.diff(a, "hours", true);
      if (isOdd(i)) {
        horas.hora_tierra = horas.hora_tierra + hours;
      } else if (!isOdd(i)) {
        horas.hora_vuelo = horas.hora_vuelo + hours;
      }
    }
  });
  return horas;
};

const guardarFechasDePilotos = (array) => {
  array.forEach((value) => {
    database_misiones("detalle_mision")
      .where("id_mision", "=", value.id_mision)
      .andWhere("id_provincia", "=", value.id_provincia)
      .andWhere("id_status", "=", value.id_status)
      .andWhere("ubicacion", "=", value.ubicacion)
      .andWhere("fecha", "=", moment(value.fecha).format())
      .update({
        hora_piloto: value.hora_piloto,
        hora_manto: value.hora_manto,
        peso: value.peso,
        pax: value.pax,
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  });
};

//dependencias de *guardarHorasVueloTierraCompleto*

const saveHoraTierraDetalle = (id_detalle, horas_tierra) => {
  return database_misiones("detalle_mision")
    .where("id", "=", id_detalle)
    .update({
      horas_tierra: horas_tierra,
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const saveHoraVueloDetalle = (id_detalle, horas_vuelo) => {
  return database_misiones("detalle_mision")
    .where("id", "=", id_detalle)
    .update({
      horas_vuelo: horas_vuelo,
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const saveHoraTierraTotales = (tabla, id, horas_tierra) => {
  return database_misiones
    .select("horas_tierra")
    .from(`${tabla}`)
    .where("id", "=", id)
    .then((data) => {
      return database_misiones(`${tabla}`)
        .where("id", "=", id)
        .update({
          horas_tierra: data[0].horas_tierra + horas_tierra,
        })
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const saveHoraVueloTotales = (tabla, id, horas_vuelo) => {
  return database_misiones
    .select("horas_vuelo")
    .from(`${tabla}`)
    .where("id", "=", id)
    .then((data) => {
      return database_misiones(`${tabla}`)
        .where("id", "=", id)
        .update({
          horas_vuelo: data[0].horas_vuelo + horas_vuelo,
        })
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

//funcion para guardar el total de tablas por pierna para totales.

const guardarHorasVueloTierraCompleto = (array) => {
  array.map(async (value, i) => {
    if (i <= array.length - 2) {
      let a = moment(value.fecha);
      let b = moment(array[i + 1].fecha);
      let hours = b.diff(a, "hours", true);
      if (isOdd(i)) {
        try {
          //agregar horas tierra

          //update a detalle en cada pierna
          const updateTierraDetalle = await saveHoraTierraDetalle(
            value.id,
            hours
          );
          //console.log(updateTierraDetalle);

          //sumar al horas de tiempo en tierra a total de provincias
          const updateTierraTotalProvincia = await saveHoraTierraTotales(
            "provincias",
            value.id_provincia,
            hours
          );
          //console.log(updateTierraTotalProvincia);

          //sumar al horas de tiempo en tierra a total de entidades
          const updateTierraTotalEntidades = await saveHoraTierraTotales(
            "entidades",
            value.id_entidad,
            hours
          );
          //console.log(updateTierraTotalEntidades);

          //sumar a horas de tiempo en tierra a total de tipo_mision
          const updateTierraTotalTipo = await saveHoraTierraTotales(
            "tipo_mision",
            value.id_tipo_mision,
            hours
          );
          //console.log(updateTierraTotalTipo);
        } catch (error) {
          console.log(error);
          return error;
        }
      } else if (!isOdd(i)) {
        try {
          //agregar horas vuelo
          //update a detalle en cada pierna
          const updateVueloDetalle = await saveHoraVueloDetalle(
            value.id,
            hours
          );
          // console.log(updateVueloDetalle);
          //sumar a horas de tiempo en vuelo a total de provincias

          const updateVueloTotalProvincia = await saveHoraVueloTotales(
            "provincias",
            value.id_provincia,
            hours
          );
          // console.log(updateVueloTotalProvincia);
          //sumar a horas de tiempo de vuelo a total de entidades

          const updateVueloTotalEntidades = await saveHoraVueloTotales(
            "entidades",
            value.id_entidad,
            hours
          );
          // console.log(updateVueloTotalEntidades);
          //sumar a horas de tiempo de vuelo a total de tipo_mision

          const updateVueloTotalTipo = await saveHoraVueloTotales(
            "tipo_mision",
            value.id_tipo_mision,
            hours
          );
          // console.log(updateVueloTotalTipo);
        } catch (error) {
          console.log(error);
          return error;
        }
      }
    }
  });
};

const filtrarEntidadesDePierna = (array1, array2) => {
  let info = [];
  array1.forEach((value) => {
    info.push(
      array2.filter((valor) => {
        return (
          moment(valor.hora_piloto).format() ===
            moment(value.hora_piloto).format() &&
          valor.id_provincia === value.id_provincia &&
          valor.id_status === value.id_status
        );
      })
    );
  });
  return info;
};

const calcularMinutosDePiernas = (array) => {
  return array.forEach((value, i) => {
    if (i <= array.length - 2) {
      let a = moment(value.hora_piloto);
      let b = moment(array[i + 1].hora_piloto);
      let hours = b.diff(a, "minutes", true);
      if (!isOdd(i)) return (array[i].minutos = hours);
    }
  });
};

module.exports.getAllMisionesAereas = getAllMisionesAereas;
module.exports.getMisionById = getMisionById;
module.exports.getDetalleMisionById = getDetalleMisionById;
module.exports.getLastDetalle = getLastDetalle;
module.exports.saveMision = saveMision;
module.exports.saveDetalleMision = saveDetalleMision;
module.exports.saveDespegue = saveDespegue;
module.exports.updateMision = updateMision;
module.exports.getUltimasDetalle = getUltimasDetalle;
module.exports.saveAterrizaje = saveAterrizaje;
module.exports.cancelMision = cancelMision;
module.exports.getMisionById_Status = getMisionById_Status;
module.exports.getManifest = getManifest;
module.exports.getPilotosPiernas = getPilotosPiernas;
module.exports.getMisionForControlAereo = getMisionForControlAereo;
module.exports.calcularHorasVuelo = calcularHorasVuelo;
module.exports.guardarHorasVueloTierraCompleto = guardarHorasVueloTierraCompleto;
module.exports.guardarFechasDePilotos = guardarFechasDePilotos;
module.exports.getDetalleMisionByIdNotStatusUno = getDetalleMisionByIdNotStatusUno;
module.exports.filtrarEntidadesDePierna = filtrarEntidadesDePierna;
module.exports.calcularMinutosDePiernas = calcularMinutosDePiernas;
