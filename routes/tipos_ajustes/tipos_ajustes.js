const router = require("express").Router();
const {} = require("./validation");
const {
  getTipoAjustes,
  crearTipoAjustes,
  getTipoAjustesByid,
  updateTipoAjustes,
  getTipoAjustesWithPages,
  paginateQueryResults,
  getTipoAjustesBySearch,
} = require("./tipos_ajustes.model");
const verify = require("../../verifytoken");

router.get("/filtrada", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  try {
    if (req.query.page === undefined && req.query.limit === undefined) {
      const query = await getTipoAjustes();
      res.status(200).json(query);
    } else {
      const query = await paginateQueryResults(
        page,
        limit,
        getTipoAjustes,
        getTipoAjustesWithPages
      );
      res.status(200).json(query);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/searchField/:text", async (req, res) => {
  const { text } = req.params;
  //   const { error } = await searchTextValidation(req.params);
  //   if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await getTipoAjustesBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_tipo_ajuste", verify, async (req, res) => {
  const { id_tipo_ajuste } = req.params;
  try {
    const query = await getTipoAjustesByid(id_tipo_ajuste);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const { id_tipo_ajuste, descripcion, estado, usuario_creacion } = req.body;
  //   const { error } = await crearCorregimientoValidation(req.body);
  //   if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await crearTipoAjustes(
      id_tipo_ajuste,
      descripcion,
      estado,
      usuario_creacion
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const { id_tipo_ajuste, descripcion, estado } = req.body;
  //   const { error } = await updateTipoAjustes(req.body);
  //   if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateTipoAjustes(id_tipo_ajuste, descripcion, estado);
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
