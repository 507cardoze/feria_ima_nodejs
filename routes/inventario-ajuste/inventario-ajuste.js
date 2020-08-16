const router = require("express").Router();
const {
  crearInventarioAjusteValidation,
  updateInventarioAjusteValidation,
} = require("./validation");
const {
  getInventarioAjuste,
  getInventarioAjusteWithPages,
  crearInventarioAjuste,
  getInventarioAjusteByid,
  updateInventarioAjuste,
  paginateQueryResults,
  getInventarioAjusteBySearch,
  getInventarioAjusteByMeta,
} = require("./inventario-ajuste.model");
const verify = require("../../verifytoken");

router.get("/filtrada", verify, async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  try {
    if (req.query.page === undefined && req.query.limit === undefined) {
      const query = await getInventarioAjuste();
      res.status(200).json(query);
    } else {
      const query = await paginateQueryResults(
        page,
        limit,
        getInventarioAjuste,
        getInventarioAjusteWithPages
      );
      console.log(query);
      res.status(200).json(query);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/searchField/:text", verify, async (req, res) => {
  const { text } = req.params;
  try {
    const query = await getInventarioAjusteBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id", verify, async (req, res) => {
  const { id } = req.params;
  try {
    const query = await getInventarioAjusteByid(id);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const {
    id_inventario,
    id_feria,
    id_tipo_ajuste,
    cantidad_ajuste,
    observacion,
  } = req.body;
  const { error } = await crearInventarioAjusteValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const verificacion = await getInventarioAjusteByMeta(
      id_inventario,
      id_feria,
      id_tipo_ajuste,
      cantidad_ajuste,
      observacion
    );
    if (verificacion.length === 1)
      return res.status(400).json("Registro ya existe.");
    const query = await crearInventarioAjuste(
      id_inventario,
      id_feria,
      id_tipo_ajuste,
      cantidad_ajuste,
      observacion,
      "ADMIN"
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const {
    id,
    id_inventario,
    id_feria,
    id_tipo_ajuste,
    cantidad_ajuste,
    observacion,
  } = req.body;
  const { error } = await updateInventarioAjusteValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateInventarioAjuste(
      id,
      id_inventario,
      id_feria,
      id_tipo_ajuste,
      cantidad_ajuste,
      observacion
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
