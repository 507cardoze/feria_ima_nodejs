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

// router.post("/register", verify, async (req, res) => {
//   const {
//     cedula,
//     password,
//     repeat_password,
//     id_direccion,
//     id_departamento,
//     empleado,
//   } = req.body;
//   const newUser = {
//     id_user: 0,
//     pass: null,
//     id_direccion: null,
//     id_departamento: null,
//     cedula: null,
//     nombre: null,
//     apellido: null,
//   };
//   //validacion de los campos que se reciben por el formulario
//   const { error } = await registerValidation(req.body);
//   if (error) return res.status(400).json(error.details[0].message);
//   // verificacion cedula, direccion y departamento
//   const userRH = await getUserRecursosHumanos(cedula);
//   if (empleado) {
//     if (!userRH)
//       return res.status(400).json("cedula no existe en recursos humanos");
//   }
//   //verificacion si la cedula existe en db general
//   const userGeneral = await getUserDBgeneral(cedula);
//   if (userGeneral) return res.status(400).json("cedula existe en DB general");
//   // verificacion de existencia de direccion
//   const direccion = await getDireccion(id_direccion);
//   if (!direccion) return res.status(400).json("direccion no existe");
//   //verificacion de existencia de departamento
//   const departamento = await getDepartamento(id_departamento);
//   if (!departamento) return res.status(400).json("departamento no existe");
//   //encryptacion de contrasena
//   const hashpass = bcrypt.hashSync(password, 10);

//   newUser.pass = hashpass;
//   newUser.id_direccion = id_direccion;
//   newUser.id_departamento = id_departamento;
//   newUser.cedula = cedula;

//   if (userRH) {
//     newUser.id_user = userRH[0].u_id;
//     newUser.nombre = userRH[0].u_nombre;
//     newUser.apellido = userRH[0].u_apellido;
//   }

//   try {
//     //insert de nuevo usuario
//     const savedUser = await saveNewUser(newUser);
//     if (!savedUser) return res.status(400).json("error en creacion");
//     res.status(201).json("usuario creado");
//   } catch (err) {
//     res.status(400).json(`error: ${err}`);
//   }
// });

module.exports = router;
