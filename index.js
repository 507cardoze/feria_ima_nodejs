const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
require("moment/locale/es.js");

//Middlewares
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

// importacion de rutas
const auth = require("./routes/auth/auth");
const pais = require("./routes/pais/pais");

//rutas
app.use("/api/auth", auth);
app.use("/api/pais", pais);

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `Servidor de FERIA IMA corriendo en el puerto: ${process.env.PORT || 5000}`
  )
);
