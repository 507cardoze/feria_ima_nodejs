const router = require("express").Router();
const { crearTipoValidation, updateTipoValidation } = require("./validation");
const {
  getTipoAjustes,
  crearTipoAjustes,
  getTipoAjustesByid,
  updateTipoAjustes,
  getTipoAjustesWithPages,
  paginateQueryResults,
  getTipoAjustesBySearch,
  getTipoByMeta,
} = require("./tipos_ajustes.model");
const verify = require("../../verifytoken");
const moment = require("moment");
require("moment/locale/es.js");

router.get("/filtrada", verify, async (req, res) => {
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

router.get("/searchField/:text", verify, async (req, res) => {
  const { text } = req.params;
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
  const { id_tipo_ajuste, descripcion, estado } = req.body;
  const { error } = await crearTipoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const verificacion = await getTipoByMeta(id_tipo_ajuste, descripcion);
    if (verificacion.length === 1)
      return res.status(400).json("Registro ya existe.");
    const query = await crearTipoAjustes(
      id_tipo_ajuste,
      descripcion,
      estado,
      req.user.login
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update", verify, async (req, res) => {
  const { id_tipo_ajuste, descripcion, estado } = req.body;
  const { error } = await updateTipoValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateTipoAjustes(id_tipo_ajuste, descripcion, estado);
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
