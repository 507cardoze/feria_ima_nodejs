const router = require("express").Router();
const {} = require("./validation");
const {
  getClientes,
  getClientesWithPages,
  crearClientes,
  getClienteByid,
  updateTipoAjustes,
  paginateQueryResults,
  getClienteBySearch,
  getClientesByMeta,
} = require("./clientes.model");
const verify = require("../../verifytoken");
const moment = require("moment");
require("moment/locale/es.js");

router.get("/filtrada", verify, async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  try {
    if (req.query.page === undefined && req.query.limit === undefined) {
      const query = await getClientes();
      res.status(200).json(query);
    } else {
      const query = await paginateQueryResults(
        page,
        limit,
        getClientes,
        getClientesWithPages
      );
      res.status(200).json(query);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/searchField/:text", verify, async (req, res) => {
  const { text } = req.params;
  try {
    const query = await getClienteBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_clientes", verify, async (req, res) => {
  const { id_clientes } = req.params;
  try {
    const query = await getClienteByid(id_clientes);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const {
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
  } = req.body;
  //   const { error } = await crearTipoValidation(req.body);
  //   if (error) return res.status(400).json(error.details[0].message);
  try {
    const verificacion = await getClientesByMeta(
      num_documento,
      nombre,
      apellido,
      genero,
      fecha_nacimiento,
      nacionalidad,
      lugar_nacimiento,
      fecha_expiracion
    );
    if (verificacion.length === 1)
      return res.status(400).json("Registro ya existe.");
    const query = await crearClientes(
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
      usuario_creacion
    );
    res.status(200).json("success");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const { id_tipo_ajuste, descripcion, estado } = req.body;
  //   const { error } = await updateTipoValidation(req.body);
  //   if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateTipoAjustes(id_tipo_ajuste, descripcion, estado);
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
