const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
require("moment/locale/es.js");

//Middlewares
dotenv.config();
const app = express();
app.use(
  require("express-status-monitor")({
    title: "Monitor de Back-end Feria Ima", // Default title
    path: "/status",
    chartVisibility: {
      cpu: true,
      mem: true,
      load: true,
      eventLoop: true,
      heap: true,
      responseTime: true,
      rps: true,
      statusCodes: true,
    },
    healthChecks: [],
  })
);

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("working");
});

// importacion de rutas
// const aeronaves = require("./routes/aeronaves/aeronaves");
// const entidades = require("./routes/entidades/entidades");
// const estatus = require("./routes/estatus/estatus");
// const funciones = require("./routes/funciones/funciones");
// const misiones_aereas = require("./routes/misiones-aereas/misiones-aereas");
// //const misiones_navales = require("./routes/funciones/misiones_navales");
// const operativos = require("./routes/operativos/operativos");
// const provincias = require("./routes/provincias/provincias");
// const tipo = require("./routes/tipos-mision/tipo");
// const tripulantes = require("./routes/tripulantes/tripulantes");
// const tripulacion = require("./routes/tripulacion/tripulacion");

//rutas
// app.use("/api/aeronaves", aeronaves);
// app.use("/api/entidades", entidades);
// app.use("/api/estatus", estatus);
// app.use("/api/funciones", funciones);
// app.use("/api/misiones-aereas", misiones_aereas);
// // app.use("/api/misiones_navales", misiones_navales);
// app.use("/api/operativos", operativos);
// app.use("/api/provincias", provincias);
// app.use("/api/tipo", tipo);
// app.use("/api/tripulantes", tripulantes);
// app.use("/api/tripulacion", tripulacion);

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `Servidor de FERIA IMA corriendo en el puerto: ${process.env.PORT || 5000}`
  )
);
