const router = require("express").Router();
const {
  crearInventarioValidation,
  updateInventarioValidation,
} = require("./validation");
const {
  getInventario,
  getInventarioWithPages,
  crearInventario,
  getInventarioByid,
  updateInventario,
  paginateQueryResults,
  getInventarioBySearch,
  getInventarioByMeta,
} = require("./inventario.model");
const verify = require("../../verifytoken");

router.get("/filtrada", verify, async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  try {
    if (req.query.page === undefined && req.query.limit === undefined) {
      const query = await getInventario();
      res.status(200).json(query);
    } else {
      const query = await paginateQueryResults(
        page,
        limit,
        getInventario,
        getInventarioWithPages,
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
    const query = await getInventarioBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id_inventario", verify, async (req, res) => {
  const { id_inventario } = req.params;
  try {
    const query = await getInventarioByid(id_inventario);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/crear", verify, async (req, res) => {
  const {
    id_pais,
    id_provincia,
    id_distrito,
    id_corregimiento,
    id_feria,
    id_producto,
    total_inicial_disponible,
    disponible_real,
    frecuencia_compra_dias,
    fecha_inicio,
    fecha_fin,
    observacion,
    estado,
  } = req.body;
  const { error } = await crearInventarioValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  try {
    const verificacion = await getInventarioByMeta(
      id_pais,
      id_provincia,
      id_distrito,
      id_corregimiento,
      id_feria,
      id_producto,
      total_inicial_disponible,
      disponible_real,
      frecuencia_compra_dias,
      fecha_inicio,
      fecha_fin,
    );
    if (verificacion.length === 1)
      return res.status(400).json("Registro ya existe.");
    const query = await crearInventario(
      id_pais,
      id_provincia,
      id_distrito,
      id_corregimiento,
      id_feria,
      id_producto,
      total_inicial_disponible,
      disponible_real,
      frecuencia_compra_dias,
      fecha_inicio,
      fecha_fin,
      observacion,
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
    id_pais,
    id_provincia,
    id_distrito,
    id_corregimiento,
    id_feria,
    id_producto,
    total_inicial_disponible,
    disponible_real,
    frecuencia_compra_dias,
    fecha_inicio,
    fecha_fin,
    observacion,
    estado,
    id_inventario,
  } = req.body;
  const { error } = await updateInventarioValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateInventario(
      id_pais,
      id_provincia,
      id_distrito,
      id_corregimiento,
      id_feria,
      id_producto,
      total_inicial_disponible,
      disponible_real,
      frecuencia_compra_dias,
      fecha_inicio,
      fecha_fin,
      observacion,
      estado,
      id_inventario,
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
