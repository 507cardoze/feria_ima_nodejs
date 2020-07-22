const router = require("express").Router();
const verify = require("../../verifytoken");
const moment = require("moment");
require("moment/locale/es.js");
const {
  newMisionValidation,
  detalleValidation,
  despegueValidation,
  aterrizajeValidation,
  completarValidation,
  cancelarValidation,
  misionByIdStatusValidation,
  validationHorasVuelo,
} = require("./validation");
const {
  getAllMisionesAereas,
  getMisionById,
  getDetalleMisionById,
  getLastDetalle,
  saveMision,
  saveDetalleMision,
  saveDespegue,
  updateMision,
  getUltimasDetalle,
  saveAterrizaje,
  cancelMision,
  getMisionById_Status,
  getManifest,
  getPilotosPiernas,
  getMisionForControlAereo,
  calcularHorasVuelo,
  guardarFechasDePilotos,
  guardarHorasVueloTierraCompleto,
  getDetalleMisionByIdNotStatusUno,
  filtrarEntidadesDePierna,
  calcularMinutosDePiernas,
} = require("./misiones-aereas.model");
const {
  verifyExistingAeronaveById,
  getAeronaveByIdMision,
  updateAeronave,
  updateAeronaveEnVuelo,
  insertAeronaveDetalle,
} = require("../aeronaves/aeronaves.model");
const {
  verifyExistingProvinciasById,
} = require("../provincias/provincias.model");
const {
  verifyExistingOperativoById,
  updateOperativo,
} = require("../operativos/operativos.model");

const {
  getTripulacionByIdMision,
  saveTripulacion,
  updateTripulacionHoras,
} = require("../tripulacion/tripulacion.model");

const { getEstatusById } = require("../estatus/estatus.model");

const {
  saveTripulantesHoras,
  updateTripulanteEnvuelo,
} = require("../tripulantes/tripulantes.model");

router.get("/", verify, async (req, res) => {
  try {
    const misiones = await getAllMisionesAereas();
    if (!misiones) return res.status(200).json("No Content");
    return res.status(200).json(misiones);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/mision/busqueda/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  const { error } = detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const misiones = await getMisionById(id_mision);
    if (!misiones) return res.status(200).json("mision no existe");
    return res.status(200).json(misiones);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/mision/status/:id_status", verify, async (req, res) => {
  const { id_status } = req.params;
  const { error } = misionByIdStatusValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  //verificar si el status es valido
  const status = await getEstatusById(id_status);
  if (!status) return res.status(200).json("estatus no existe");

  try {
    const misiones = await getMisionById_Status(id_status);
    if (!misiones) return res.status(200).json("No Content");
    return res.status(200).json(misiones);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/mision/control-aereo", verify, async (req, res) => {
  try {
    const misiones = await getMisionForControlAereo();
    if (!misiones) return res.status(200).json("No Content");
    return res.status(200).json(misiones);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/manifest/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  const { error } = detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  const misiones = await getMisionById(id_mision);
  if (!misiones) return res.status(200).json("mision no existe");

  try {
    const manifest = await getManifest(id_mision);
    if (!manifest) return res.status(200).json("No Content");
    return res.status(200).json(manifest);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/detalles/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  const { error } = detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  const misiones = await getMisionById(id_mision);
  if (!misiones) return res.status(200).json("mision no existe");

  try {
    const detalles = await getDetalleMisionById(id_mision);
    if (!detalles) return res.status(200).json("No Content");
    return res.status(200).json(detalles);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/detalles/filtrada_datos/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  const { error } = detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const misiones = await getMisionById(id_mision);
    if (!misiones) return res.status(200).json("mision no existe");

    const detalles_pierna = await getPilotosPiernas(id_mision);
    if (!detalles_pierna) return res.status(200).json("No Content");

    const detalles_completas = await getDetalleMisionByIdNotStatusUno(
      id_mision
    );
    if (!detalles_completas) return res.status(200).json("No Content");

    const datos = filtrarEntidadesDePierna(detalles_pierna, detalles_completas);

    return res.status(200).json(datos);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/detalles/piernas/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  const { error } = detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  const misiones = await getMisionById(id_mision);
  if (!misiones) return res.status(200).json("mision no existe");

  try {
    const detalles = await getPilotosPiernas(id_mision);
    if (!detalles) return res.status(200).json("No Content");
    return res.status(200).json(detalles);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/aeronave/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  const { error } = detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  const mision = await getMisionById(id_mision);
  if (!mision) return res.status(200).json("mision no existe");

  const aeronave = await getAeronaveByIdMision(id_mision);
  if (!aeronave) return res.status(200).json("mision sin aeronave");

  try {
    const detalleAeronave = await verifyExistingAeronaveById(
      aeronave[0].id_aeronave
    );
    if (!detalleAeronave) return res.status(200).json("aeronave no existe");
    return res.status(200).json(detalleAeronave);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/tripulacion/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  const { error } = detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  const mision = await getMisionById(id_mision);
  if (!mision) return res.status(200).json("mision no existe");

  try {
    const tripulacion = await getTripulacionByIdMision(id_mision);
    if (!tripulacion) return res.status(200).json("mision sin tripulacion");
    return res.status(200).json(tripulacion);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.post("/crear", verify, async (req, res) => {
  const {
    id_aeronave,
    id_provincia,
    id_operativo,
    ubicacion,
    descripcion,
    tripulacion,
  } = req.body;
  const { id } = req.user;
  //console.log(req.body);
  //validacion de campos provenientes del formulario
  const { error } = newMisionValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  if (tripulacion.length === 0)
    return res.status(200).json("No hay tripulacion selecionada");

  try {
    //verificar si existe la aeronave en la base de datos
    const existeAeronave = await verifyExistingAeronaveById(id_aeronave);
    if (!existeAeronave) return res.status(400).json("aeronave no existe");
    //verificar si existe la provincia en la base de datos
    const existeProvincia = await verifyExistingProvinciasById(id_provincia);
    if (!existeProvincia) return res.status(400).json("provincia no existe");
    //verificar si existe el operativo en la base de datos
    const existeOperativo = await verifyExistingOperativoById(id_operativo);
    if (!existeOperativo) return res.status(400).json("operativo no existe");

    const guardarMision = await saveMision(
      id_aeronave,
      id_provincia,
      id_operativo,
      ubicacion,
      descripcion,
      id
    );
    const guardarTripulacion = await saveTripulacion(
      guardarMision[0],
      tripulacion
    );
    const guardarDetalleMision = await saveDetalleMision(
      guardarMision[0],
      id_provincia,
      ubicacion
    );

    const updateEnVueloAeronave = await updateAeronaveEnVuelo(id_aeronave, 1);
    const updateEnVueloTripulantes = await updateTripulanteEnvuelo(
      tripulacion,
      1
    );

    return res.status(200).json("mision creada con exito");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.put("/despegue", verify, async (req, res) => {
  const { id_mision, entidades } = req.body;
  const { error } = despegueValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  if (entidades.length === 0)
    return res.status(200).json("No hay entidades selecionadas");

  try {
    const mision = await getMisionById(id_mision);
    if (!mision) return res.status(200).json("mision no existe");
    if (mision[0].id_status >= 3)
      return res.status(200).json("mision esta volando");

    const ultimaPierna = await getLastDetalle(id_mision);
    if (!ultimaPierna)
      return res.status(200).json("esta mision no tiene detalle");

    if (ultimaPierna[0].id_status >= 3)
      return res.status(200).json("mision esta volando");

    const crearDespegue = await saveDespegue(
      id_mision,
      entidades,
      moment().format(),
      ultimaPierna[0].id_provincia,
      ultimaPierna[0].ubicacion
    );
    const updatemisions = await updateMision(
      id_mision,
      ultimaPierna[0].id_provincia,
      ultimaPierna[0].ubicacion,
      3
    );
    return res.status(200).json("despegue registrado con exito");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.put("/aterrizaje", verify, async (req, res) => {
  const { id_mision, ubicacion, id_provincia } = req.body;
  //validacion de campos provenientes del formulario
  const { error } = aterrizajeValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const mision = await getMisionById(id_mision);
    if (!mision) return res.status(200).json("mision no existe");
    if (mision[0].id_status !== 3)
      return res.status(200).json("mision no se encuentra en el aire");

    const existeProvincia = await verifyExistingProvinciasById(id_provincia);
    if (!existeProvincia) return res.status(400).json("provincia no existe");

    const ultimaPierna = await getLastDetalle(id_mision);
    const getUltimasDetalles = await getUltimasDetalle(
      ultimaPierna[0].id_mision,
      ultimaPierna[0].fecha,
      ultimaPierna[0].id_provincia,
      ultimaPierna[0].id_status,
      ultimaPierna[0].ubicacion
    );
    const saveAterrizajes = await saveAterrizaje(
      getUltimasDetalles,
      ubicacion,
      moment().format(),
      id_provincia,
      id_mision
    );
    const updatemisions = await updateMision(
      id_mision,
      id_provincia,
      ubicacion,
      2
    );
    return res.status(200).json("aterrizaje registrado con exito");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.put("/mision/completar", verify, async (req, res) => {
  const { id_mision } = req.body;
  const { error } = completarValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const mision = await getMisionById(id_mision);
  if (!mision) return res.status(200).json("mision no existe");
  if (mision[0].id_status !== 2)
    return res.status(200).json("mision tiene que estar en tierra");
  const piernas = await getDetalleMisionById(id_mision);
  if (piernas.length <= 2)
    return res
      .status(200)
      .json("no se puede completar misiones planeadas o en vuelo.");

  const tripulacion = await getTripulacionByIdMision(id_mision);
  if (!tripulacion) return res.status(200).json("mision sin tripulacion");

  const detalles = await getPilotosPiernas(id_mision);
  if (!detalles) return res.status(200).json("No Content");

  try {
    const updatemisions = await updateMision(
      mision[0].id,
      mision[0].id_provincia,
      mision[0].ubicacion,
      4
    );
    const updateEnVueloAeronave = await updateAeronaveEnVuelo(
      mision[0].id_aeronave,
      0
    );
    const updateEnVueloTripulantes = await updateTripulanteEnvuelo(
      tripulacion,
      0
    );
    res.json("ok");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.put("/mision/cancelar", verify, async (req, res) => {
  const { id_mision, motivo } = req.body;
  const { id, nombre, apellido, cedula } = req.user;
  const { error } = await cancelarValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const mision = await getMisionById(id_mision);
  if (!mision) return res.status(200).json("mision no existe");

  const tripulacion = await getTripulacionByIdMision(id_mision);
  if (!tripulacion) return res.status(200).json("mision sin tripulacion");

  try {
    const cancel = await cancelMision(
      mision[0].id,
      id,
      nombre,
      apellido,
      cedula,
      motivo
    );
    const updatemisions = await updateMision(
      mision[0].id,
      mision[0].id_provincia,
      mision[0].ubicacion,
      8
    );

    const updateEnVueloAeronave = await updateAeronaveEnVuelo(
      mision[0].id_aeronave,
      0
    );
    const updateEnVueloTripulantes = await updateTripulanteEnvuelo(
      tripulacion,
      0
    );

    res.json("ok");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.put("/mision/horas-vuelo", verify, async (req, res) => {
  const {
    id_mision,
    horas_vuelo,
    horas_tierra,
    horas_vuelo_manto,
    horas_tierra_manto,
    diurno,
    nocturno,
    escalas,
    observacion_piloto,
    observacion_manto,
    tempArranque_1,
    tempArranque_2,
    Torque_1,
    Torque_2,
    n1RPM_1,
    n1RPM_2,
    n2RPM_1,
    n2RPM_2,
    temp_1,
    temp_2,
    FF_1,
    FF_2,
    oilTemp_1,
    oilTemp_2,
    pressAlt_1,
    pressAlt_2,
    alt_1,
    alt_2,
    oat_1,
    oat_2,
    kias_1,
    kias_2,
    xlsn_press,
    gbox_oilTemp,
  } = req.body;
  const { error } = await validationHorasVuelo(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const mision = await getMisionById(id_mision);
  if (!mision) return res.status(200).json("mision no existe");
  if (mision[0].id_status !== 4)
    return res.status(200).json("mision no existe no tiene el status correcto");

  try {
    const updateMisiones = await updateMision(
      mision[0].id,
      mision[0].id_provincia,
      mision[0].ubicacion,
      5,
      horas_vuelo,
      horas_tierra,
      horas_vuelo_manto,
      horas_tierra_manto,
      diurno,
      nocturno,
      observacion_piloto,
      observacion_manto
    );

    const updateDetalle = await guardarFechasDePilotos(escalas);

    // const updateAeronaveHoras = await updateAeronave(
    //   mision[0].id_aeronave,
    //   horas_vuelo,
    //   horas_vuelo_manto
    // );

    const DetalleAeronave = await insertAeronaveDetalle(
      mision[0].id,
      mision[0].id_aeronave,
      tempArranque_1,
      tempArranque_2,
      Torque_1,
      Torque_2,
      n1RPM_1,
      n1RPM_2,
      n2RPM_1,
      n2RPM_2,
      temp_1,
      temp_2,
      FF_1,
      FF_2,
      oilTemp_1,
      oilTemp_2,
      pressAlt_1,
      pressAlt_2,
      alt_1,
      alt_2,
      oat_1,
      oat_2,
      kias_1,
      kias_2,
      xlsn_press,
      gbox_oilTemp
    );

    res.json("ok");
  } catch (error) {
    console.error(error);
    res.status(400).json("error");
  }
});

router.get("/reporte/provincias/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  console.log(id_mision);
  const { error } = await detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  const mision = await getMisionById(id_mision);
  if (!mision) return res.status(200).json("mision no existe");

  try {
    res.json("ok");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/reporte/entidades/:id_mision", verify, async (req, res) => {
  const { id_mision } = req.params;
  console.log(id_mision);
  const { error } = await detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  const mision = await getMisionById(id_mision);
  if (!mision) return res.status(200).json("mision no existe");

  try {
    res.json("ok");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/reporte/horas/:id_mision", async (req, res) => {
  const { id_mision } = req.params;
  console.log(id_mision);
  const { error } = await detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const mision = await getMisionById(id_mision);
    if (!mision) return res.status(200).json("mision no existe");
    res.json(mision);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/reporte/tripulantes/:id_mision", async (req, res) => {
  const { id_mision } = req.params;
  console.log(id_mision);
  const { error } = await detalleValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const mision = await getMisionById(id_mision);
    if (!mision) return res.status(200).json("mision no existe");

    const tripulantes = await getTripulacionByIdMision(id_mision);
    if (!tripulantes) return res.status(200).json(tripulantes);
    res.json(tripulantes);
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

module.exports = router;
