const router = require("express").Router();
const {
  crearProvinciaValidation,
  updateProvinciaValidation,
} = require("./validation");
const {
  getProvincias,
  crearProvincia,
  getProvinciaByid,
  updateProvincia,
  getProvinciasWithPages,
  getProvinciasBySearch,
  getProvinciasByMeta,
  paginateQueryResults,
} = require("./provincias.model");
const verify = require("../../verifytoken");

router.get("/filtrada", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  if (req.query.page === undefined && req.query.limit === undefined) {
    const query = await getProvincias();
    res.status(200).json(query);
  } else {
    const query = await paginateQueryResults(
      page,
      limit,
      getProvincias,
      getProvinciasWithPages
    );
    res.status(200).json(query);
  }
});

router.get("/searchField/:text", async (req, res) => {
  const { text } = req.params;
  try {
    const query = await getProvinciasBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_provincia", verify, async (req, res) => {
  const { id_provincia } = req.params;
  try {
    const queryProvincias = await getProvinciaByid(id_provincia);
    res.status(200).json(queryProvincias);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const { id_pais, nombre_provincia, estado } = req.body;
  const { error } = await crearProvinciaValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const provincias = await getProvinciasByMeta(id_pais, nombre_provincia);
    if (provincias.length === 1)
      return res.status(400).json("Registro ya existe");
    const queryCrearProvincia = await crearProvincia(
      id_pais,
      nombre_provincia,
      estado
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const { id_provincia, id_pais, nombre_provincia, estado } = req.body;
  const { error } = await updateProvinciaValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const queryProvincias = await updateProvincia(
      id_provincia,
      id_pais,
      nombre_provincia,
      estado
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
