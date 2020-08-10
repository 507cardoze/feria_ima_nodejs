const router = require("express").Router();
const {
  crearCorregimientoValidation,
  updateCorregimientoValidation,
  searchTextValidation,
} = require("./validation");
const {
  getCorregimientos,
  crearCorregimiento,
  getCorregimientoByid,
  updateCorregimiento,
  getCorregimientosWithPages,
  paginateQueryResults,
  getCorregimientoBySearch,
} = require("./corregimientos.model");
const verify = require("../../verifytoken");

router.get("/filtrada", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const results = {};

  try {
    if (req.query.page === undefined && req.query.limit === undefined) {
      results.results = await getCorregimientos();
      res.status(200).json(results);
    } else {
      const query = await paginateQueryResults(
        page,
        limit,
        getCorregimientos,
        getCorregimientosWithPages
      );
      res.status(200).json(query);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/searchField/:text", async (req, res) => {
  const { text } = req.params;
  const { error } = await searchTextValidation(req.params);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await getCorregimientoBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_corregimiento", verify, async (req, res) => {
  const { id_corregimiento } = req.params;
  try {
    const query = await getCorregimientoByid(id_corregimiento);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const { id_provincia, id_distrito, nombre_corregimiento, estado } = req.body;
  const { error } = await crearCorregimientoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await crearCorregimiento(
      id_provincia,
      id_distrito,
      nombre_corregimiento,
      estado
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const {
    id_corregimiento,
    id_provincia,
    id_distrito,
    nombre_corregimiento,
    estado,
  } = req.body;
  const { error } = await updateCorregimientoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateCorregimiento(
      id_corregimiento,
      id_provincia,
      id_distrito,
      nombre_corregimiento,
      estado
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
