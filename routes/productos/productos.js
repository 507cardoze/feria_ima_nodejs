const router = require("express").Router();
const {
  crearProductoValidation,
  updateProductoValidation,
} = require("./validation");
const {
  getProductos,
  getProductosWithPages,
  crearProductos,
  getProductoByid,
  updateProductos,
  paginateQueryResults,
  getProductosBySearch,
  getProductosByMeta,
} = require("./productos.model");
const verify = require("../../verifytoken");
const moment = require("moment");
require("moment/locale/es.js");

router.get("/filtrada", verify, async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  try {
    if (req.query.page === undefined && req.query.limit === undefined) {
      const query = await getProductos();
      res.status(200).json(query);
    } else {
      const query = await paginateQueryResults(
        page,
        limit,
        getProductos,
        getProductosWithPages
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
    const query = await getProductosBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_productos", verify, async (req, res) => {
  const { id_productos } = req.params;
  try {
    const query = await getProductoByid(id_productos);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const { nombre_productos, frecuencia_compra_dias, estado } = req.body;
  const { error } = await crearProductoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const verificacion = await getProductosByMeta(
      nombre_productos,
      frecuencia_compra_dias
    );
    if (verificacion.length === 1)
      return res.status(400).json("Registro ya existe.");
    const query = await crearProductos(
      nombre_productos,
      frecuencia_compra_dias,
      estado,
      "ADMIN"
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const {
    nombre_productos,
    frecuencia_compra_dias,
    estado,
    id_productos,
  } = req.body;
  const { error } = await updateProductoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateProductos(
      nombre_productos,
      frecuencia_compra_dias,
      estado,
      id_productos
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
