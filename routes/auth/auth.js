const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { loginValidation, registerValidation } = require("./validation");
const { generateAccessToken, getUser, saveNewUser } = require("./auth.model");
const verify = require("../../verifytoken");

router.post("/login", async (req, res) => {
  const { UserName, Password } = req.body;
  //validacion de campos del formulario
  const { error } = await loginValidation(req.body);
  //console.log(error);
  if (error) return res.status(400).json(error.details[0].message);
  //verificacion de cedula en la base de datos
  // const userGeneral = await getUserDBgeneral(cedula);
  // if (!userGeneral) return res.status(400).json(`error: Login Error`);
  // //verificacion de contrasena
  // if (!bcrypt.compareSync(password, userGeneral[0].pass))
  //   return res.status(400).json(`error: Login Error`);
  // const user = {
  //   id: userGeneral[0].id,
  //   id_direccion: userGeneral[0].id_direccion,
  //   id_departamento: userGeneral[0].id_departamento,
  //   nombre: userGeneral[0].nombre,
  //   apellido: userGeneral[0].apellido,
  //   cedula: userGeneral[0].cedula,
  // };
  const user = {
    userName: "admin",
    nombre: "admin",
    apellido: "admin",
  };

  try {
    //crear access token
    const accessToken = await generateAccessToken(user);
    res.status(201).json({ accessToken: accessToken });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/register", async (req, res) => {
  const { login, pswd, name, email, active } = req.body;
  //validacion de los campos que se reciben por el formulario
  const { error } = await registerValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  // verificacion login

  const user = await getUser(login);
  if (user.length > 0) return res.status(400).json("Login ya existe.");

  //encryptacion de contrasena
  const hashpass = bcrypt.hashSync(pswd, 10);

  try {
    //insert de nuevo usuario
    const savedUser = await saveNewUser(login, hashpass, name, email, active);
    if (!savedUser) return res.status(400).json("error en creacion");
    res.status(201).json("usuario creado");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

module.exports = router;
