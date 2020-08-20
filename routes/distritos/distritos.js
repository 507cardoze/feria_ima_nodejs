const router = require("express").Router();
const {
  crearDistritoValidation,
  updateDistritoValidation,
} = require("./validation");
const {
  getDistritos,
  crearDistrito,
  getDistritoByid,
  updateDistrito,
  getDistritoByIdProvincia,
  getDistritosWithPages,
  getDistritoBySearch,
  getDistritosByMeta,
  paginateQueryResults,
} = require("./distritos.model");
const verify = require("../../verifytoken");

router.get("/filtrada", verify, async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  if (req.query.page === undefined && req.query.limit === undefined) {
    const query = await getDistritos();
    res.status(200).json(query);
  } else {
    const query = await paginateQueryResults(
      page,
      limit,
      getDistritos,
      getDistritosWithPages
    );
    res.status(200).json(query);
  }
});

router.get("/searchField/:text", verify, async (req, res) => {
  const { text } = req.params;
  try {
    const query = await getDistritoBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_distrito", verify, verify, async (req, res) => {
  const { id_distrito } = req.params;
  try {
    const query = await getDistritoByid(id_distrito);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get(
  "/buscarDistritoByProvincia/:id_provincia",
  verify,
  async (req, res) => {
    const { id_provincia } = req.params;
    try {
      const query = await getDistritoByIdProvincia(id_provincia);
      res.status(200).json(query);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

router.post("/crear", verify, async (req, res) => {
  const { id_provincia, nombre_distrito, estado } = req.body;
  const { error } = await crearDistritoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const distritos = await getDistritosByMeta(id_provincia, nombre_distrito);
    if (distritos.length === 1)
      return res.status(400).json("Registro ya existe");
    const query = await crearDistrito(id_provincia, nombre_distrito, estado);
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const { id_provincia, nombre_distrito, id_distrito, estado } = req.body;
  const { error } = await updateDistritoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateDistrito(
      id_provincia,
      nombre_distrito,
      id_distrito,
      estado
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
