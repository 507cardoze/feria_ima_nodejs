const router = require("express").Router();
const {} = require("./validation");
const {
  getCorregimientos,
  crearCorregimiento,
  getCorregimientoByid,
  updateCorregimiento,
} = require("./corregimientos.model");
const verify = require("../../verifytoken");

router.get("/", verify, async (req, res) => {
  try {
    const query = await getCorregimientos();
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
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
  // const { error } = await crearProvinciaValidation(req.body);
  // if (error) return res.status(400).json(error.details[0].message);
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
  // const { error } = await updateProvinciaValidation(req.body);
  // if (error) return res.status(400).json(error.details[0].message);
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
