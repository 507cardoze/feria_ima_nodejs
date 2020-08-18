const router = require("express").Router();
const {} = require("./validation");
const {
  getConsumoTotalPorFeria,
  getConsumoTotalPorFeriaPorFecha,
  getConsumoByFeria,
  getConsumoByFeriaByFecha,
  getAmountofTrans,
  getAmountofTransFecha,
} = require("./consultas.model");
const verify = require("../../verifytoken");

router.get("/total-ferias", async (req, res) => {
  const desde = req.query.desde;
  const hasta = req.query.hasta;

  if (req.query.desde === undefined && req.query.hasta === undefined) {
    const query = await getConsumoTotalPorFeria();
    res.status(200).json(query);
  } else {
    const query = await getConsumoTotalPorFeriaPorFecha(desde, hasta);
    res.status(200).json(query);
  }
});

router.get("/feria/:id_feria", async (req, res) => {
  const { id_feria } = req.params;
  const desde = req.query.desde;
  const hasta = req.query.hasta;

  if (req.query.desde === undefined && req.query.hasta === undefined) {
    const query = await getConsumoByFeria(id_feria);
    res.status(200).json(query);
  } else {
    const query = await getConsumoByFeriaByFecha(id_feria, desde, hasta);
    res.status(200).json(query);
  }
});

router.get("/total-transacciones", async (req, res) => {
  const desde = req.query.desde;
  const hasta = req.query.hasta;

  if (req.query.desde === undefined && req.query.hasta === undefined) {
    const query = await getAmountofTrans();
    res.status(200).json([query[0].consumo]);
    console.log(query);
  } else {
    const query = await getAmountofTransFecha(desde, hasta);
    res.status(200).json([query[0].consumo]);
  }
});

module.exports = router;
