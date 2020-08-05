const router = require("express").Router();
const { crearPaisValidation } = require("./validation");
const { crearPais, getPaises } = require("./pais.model");
const verify = require("../../verifytoken");

router.get("/", verify, async (req, res) => {
  try {
    const queryPaises = await getPaises();
    res.status(200).json(queryPaises);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const { nomesclatura, pais, nacionalidad, estado } = req.body;
  //validacion de campos del formulario
  const { error } = await crearPaisValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const queryCrearPais = await crearPais(
      nomesclatura,
      pais,
      nacionalidad,
      estado,
      "ADMIN"
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
