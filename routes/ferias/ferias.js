const router = require("express").Router();
const {} = require("./validation");
const {
  getFeria,
  crearFeria,
  getFeriaByid,
  updateFeria,
  getFeriaWithPages,
  paginateQueryResults,
  getFeriaBySearch,
} = require("./ferias.model");
const verify = require("../../verifytoken");

router.get("/filtrada", async (req, res) => {
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
        getFeriaWithPages
      );
      res.status(200).json(query);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/searchField/:text", async (req, res) => {
  const { text } = req.params;
  // const { error } = await searchTextValidation(req.params);
  //if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await getFeriaBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_feria", async (req, res) => {
  const { id_feria } = req.params;
  try {
    const query = await getFeriaByid(id_feria);
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
    user,
  } = req.body;
  // const { error } = await crearCorregimientoValidation(req.body);
  // if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await crearFeria(
      nombre_feria,
      id_provincia,
      id_distrito,
      id_corregimiento,
      descripcion_lugar,
      descripcion_feria,
      estado,
      user
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
  // const { error } = await updateCorregimientoValidation(req.body);
  // if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateFeria(
      id_feria,
      nombre_feria,
      id_provincia,
      id_distrito,
      id_corregimiento,
      descripcion_lugar,
      descripcion_feria,
      estado
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
