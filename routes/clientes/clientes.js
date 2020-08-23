const router = require("express").Router();
const {
  crearClienteValidation,
  updateClienteValidation,
} = require("./validation");
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
  } = req.body;
  const { error } = await crearClienteValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const verificacion = await getClientesByMeta(
      num_documento,
      nombre,
      apellido
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
      req.user.login
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
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
    id_cliente,
  } = req.body;
  const { error } = await updateClienteValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateTipoAjustes(
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
      id_cliente
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
