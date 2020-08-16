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
const provincias = require("./routes/provincias/provincias");
const corregimientos = require("./routes/corregimientos/corregimientos");
const distritos = require("./routes/distritos/distritos");
const clientes = require("./routes/clientes/clientes");
const productos = require("./routes/productos/productos");
const feria = require("./routes/ferias/ferias");
const tipo_ajustes = require("./routes/tipos_ajustes/tipos_ajustes");

//rutas
app.use("/api/auth", auth);
app.use("/api/pais", pais);
app.use("/api/provincias", provincias);
app.use("/api/corregimientos", corregimientos);
app.use("/api/distritos", distritos);
app.use("/api/feria", feria);
app.use("/api/tipo-ajustes", tipo_ajustes);
app.use("/api/clientes", clientes);
app.use("/api/productos", productos);

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `Servidor de FERIA IMA corriendo en el puerto: ${process.env.PORT || 5000}`
  )
);
