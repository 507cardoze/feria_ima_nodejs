const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { loginValidation } = require("./validation");
const { generateAccessToken, getUser, saveNewUser } = require("./auth.model");
const verify = require("../../verifytoken");

router.post("/login", async (req, res) => {
  const { UserName, Password } = req.body;
  //validacion de campos del formulario
  const { error } = await loginValidation(req.body);
  //console.log(error);
  if (error) return res.status(400).json(error.details[0].message);
  //verificacion de cedula en la base de datos
  //   const userGeneral = await getUserDBgeneral(cedula);
  //   if (!userGeneral) return res.status(400).json(`error: Login Error`);
  //   //verificacion de contrasena
  //   if (!bcrypt.compareSync(password, userGeneral[0].pass))
  //     return res.status(400).json(`error: Login Error`);
  //   const user = {
  //     id: userGeneral[0].id,
  //     id_direccion: userGeneral[0].id_direccion,
  //     id_departamento: userGeneral[0].id_departamento,
  //     nombre: userGeneral[0].nombre,
  //     apellido: userGeneral[0].apellido,
  //     cedula: userGeneral[0].cedula,
  //   };
  const user = {
    userName: "stpancar",
    nombre: "Anthony",
    apellido: "Cardoze",
  };

  try {
    //crear access token
    const accessToken = await generateAccessToken(user);
    res.status(201).json({ accessToken: accessToken });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
