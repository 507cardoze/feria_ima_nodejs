const router = require("express").Router();
const { crearPaisValidation, updatePaisValidation } = require("./validation");
const {
  crearPais,
  getPaises,
  getPaisByid,
  updatePais,
  getPaisesWithPages,
  paginateQueryResults,
  getPaisBySearch,
  getPaisByMeta,
} = require("./pais.model");
const verify = require("../../verifytoken");

router.get("/filtrada", verify, async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  if (req.query.page === undefined && req.query.limit === undefined) {
    const query = await getPaises();
    res.status(200).json(query);
  } else {
    const query = await paginateQueryResults(
      page,
      limit,
      getPaises,
      getPaisesWithPages
    );
    res.status(200).json(query);
  }
});

router.get("/searchField/:text", async (req, res) => {
  const { text } = req.params;
  try {
    const query = await getPaisBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id", verify, async (req, res) => {
  const { id } = req.params;
  try {
    const queryPaises = await getPaisByid(id);
    res.status(200).json(queryPaises);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const { nomesclatura, pais, nacionalidad, estado } = req.body;
  const { error } = await crearPaisValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const paises = await getPaisByMeta(nomesclatura, pais, nacionalidad);
    if (paises.length === 1) return res.status(400).json("Registro ya existe");
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

router.put("/update", verify, async (req, res) => {
  const { nomesclatura, pais, nacionalidad, estado } = req.body;
  const { error } = await updatePaisValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const queryPaises = await updatePais(
      nomesclatura,
      pais,
      nacionalidad,
      estado
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
