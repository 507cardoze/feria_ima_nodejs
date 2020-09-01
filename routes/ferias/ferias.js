const router = require("express").Router();
const { crearFeriaValidation, updateFeriaValidation } = require("./validation");
const {
  getFeria,
  crearFeria,
  getFeriaByid,
  updateFeria,
  getFeriaWithPages,
  paginateQueryResults,
  getFeriaBySearch,
  getFeriaByMeta,
  getFeriaByidProvincia,
} = require("./ferias.model");
const verify = require("../../verifytoken");

router.get("/filtrada", verify, async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  try {
    if (req.query.page === undefined && req.query.limit === undefined) {
      const query = await getFeria();
      res.status(200).json(query);
    } else {
      const query = await paginateQueryResults(
        page,
        limit,
        getFeria,
        getFeriaWithPages,
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
    const query = await getFeriaBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_feria", verify, async (req, res) => {
  const { id_feria } = req.params;
  try {
    const query = await getFeriaByid(id_feria);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/buscarFeria/:id_provincia", verify, async (req, res) => {
  const { id_provincia } = req.params;
  try {
    const query = await getFeriaByidProvincia(id_provincia);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const {
    nombre_feria,
    id_provincia,
    id_distrito,
    id_corregimiento,
    descripcion_lugar,
    descripcion_feria,
    estado,
  } = req.body;
  const { error } = await crearFeriaValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const verificacion = await getFeriaByMeta(
      nombre_feria,
      id_provincia,
      id_distrito,
      id_corregimiento,
      descripcion_lugar,
    );
    if (verificacion.length === 1)
      return res.status(400).json("Registro ya existe.");
    const query = await crearFeria(
      nombre_feria,
      id_provincia,
      id_distrito,
      id_corregimiento,
      descripcion_lugar,
      descripcion_feria,
      estado,
      req.user.login,
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const {
    id_feria,
    nombre_feria,
    id_provincia,
    id_distrito,
    id_corregimiento,
    descripcion_lugar,
    descripcion_feria,
    estado,
  } = req.body;
  const { error } = await updateFeriaValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateFeria(
      id_feria,
      nombre_feria,
      id_provincia,
      id_distrito,
      id_corregimiento,
      descripcion_lugar,
      descripcion_feria,
      estado,
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
