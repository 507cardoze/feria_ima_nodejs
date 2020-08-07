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
} = require("./provincias.model");
const verify = require("../../verifytoken");

router.get("/", verify, async (req, res) => {
  try {
    const queryProvincias = await getProvincias();
    res.status(200).json(queryProvincias);
  } catch (error) {
    res.status(500).json(error);
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
  // const { error } = await crearProvinciaValidation(req.body);
  // if (error) return res.status(400).json(error.details[0].message);
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
