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
} = require("./distritos.model");
const verify = require("../../verifytoken");

router.get("/", verify, async (req, res) => {
  try {
    const query = await getDistritos();
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/buscar/:id_distrito", verify, async (req, res) => {
  const { id_distrito } = req.params;
  try {
    const query = await getDistritoByid(id_distrito);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/buscarDistritoByProvincia/:id_provincia", async (req, res) => {
  const { id_provincia } = req.params;
  try {
    const query = await getDistritoByIdProvincia(id_provincia);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const { id_provincia, nombre_distrito, estado } = req.body;
  const { error } = await crearDistritoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
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
