const router = require("express").Router();
const {
  getConsumoTotalPorFeria,
  getConsumoTotalPorFeriaPorFecha,
  getConsumoByFeria,
  getConsumoByFeriaByFecha,
  getAmountofTrans,
  getAmountofTransFecha,
  getClientesTotalesPorFeria,
  getClientesTotalesPorFeriaPorFecha,
  getCantidadClientesByFeria,
  getCantidadClientesByFeriaByfecha,
  getConsumoTotalPorFeriaHoy,
  getClientesTotalesPorFeriaHoy,
  getDisponibleRealByFeriaByProductos,
} = require("./consultas.model");
const verify = require("../../verifytoken");

// consumo

router.get("/total-ferias-hoy", verify, async (req, res) => {
  const query = await getConsumoTotalPorFeriaHoy();
  console.log(query);
  res.status(200).json(query);
});

router.get("/total-clientes-hoy", verify, async (req, res) => {
  const query = await getClientesTotalesPorFeriaHoy();
  console.log(query);
  res.status(200).json(query);
});

router.get("/total-ferias", verify, async (req, res) => {
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

router.get("/feria/:id_feria", verify, async (req, res) => {
  const { id_feria } = req.params;
  const desde = req.query.desde;
  const hasta = req.query.hasta;

  try {
    if (req.query.desde === undefined && req.query.hasta === undefined) {
      const query = await getConsumoByFeria(id_feria);
      res.status(200).json(query);
    } else {
      const query = await getConsumoByFeriaByFecha(id_feria, desde, hasta);
      res.status(200).json(query);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/total-transacciones", verify, async (req, res) => {
  const desde = req.query.desde;
  const hasta = req.query.hasta;
  try {
    if (req.query.desde === undefined && req.query.hasta === undefined) {
      const query = await getAmountofTrans();
      res.status(200).json([query[0].consumo]);
    } else {
      const query = await getAmountofTransFecha(desde, hasta);
      res.status(200).json([query[0].consumo]);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// clientes

router.get("/total-clientes", verify, async (req, res) => {
  const desde = req.query.desde;
  const hasta = req.query.hasta;

  if (req.query.desde === undefined && req.query.hasta === undefined) {
    const query = await getClientesTotalesPorFeria();
    res.status(200).json(query);
  } else {
    const query = await getClientesTotalesPorFeriaPorFecha(desde, hasta);
    res.status(200).json(query);
  }
});

router.get("/clientes/:id_feria", verify, async (req, res) => {
  const { id_feria } = req.params;
  const desde = req.query.desde;
  const hasta = req.query.hasta;

  if (req.query.desde === undefined && req.query.hasta === undefined) {
    const query = await getCantidadClientesByFeria(id_feria);
    res.status(200).json(query);
  } else {
    const query = await getCantidadClientesByFeriaByfecha(
      id_feria,
      desde,
      hasta
    );
    res.status(200).json(query);
  }
});

router.get("/cantidad-clientes", verify, async (req, res) => {
  const desde = req.query.desde;
  const hasta = req.query.hasta;

  if (req.query.desde === undefined && req.query.hasta === undefined) {
    const query = await getClientesTotalesPorFeria();
    const cantidad = query.reduce((accum, item) => accum + item.clientes, 0);
    res.status(200).json([cantidad]);
  } else {
    const query = await getClientesTotalesPorFeriaPorFecha(desde, hasta);
    const cantidad = query.reduce((accum, item) => accum + item.clientes, 0);
    res.status(200).json([cantidad]);
  }
});

//disponible real

router.get("/disponible-real/:id_feria/:id_producto", async (req, res) => {
  const { id_feria, id_producto } = req.params;
  const desde = req.query.desde;
  const hasta = req.query.hasta;

  const query = await getDisponibleRealByFeriaByProductos(
    id_producto,
    id_feria,
    desde,
    hasta
  );
  res.status(200).json(query);
});

module.exports = router;
