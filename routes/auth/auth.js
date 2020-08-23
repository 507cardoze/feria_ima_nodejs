const router = require("express").Router();
const bcrypt = require("bcryptjs");
const {
  loginValidation,
  registerValidation,
  resetValidation,
  updateValidation,
} = require("./validation");
const {
  generateAccessToken,
  getUser,
  saveNewUser,
  getAllUsers,
  getUsersWithPages,
  paginateQueryResults,
  getUserBySearch,
  updateUserData,
  updatePassword,
} = require("./auth.model");
const verify = require("../../verifytoken");

router.get("/filtrada", verify, async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  if (req.query.page === undefined && req.query.limit === undefined) {
    const query = await getAllUsers();
    res.status(200).json(query);
  } else {
    const query = await paginateQueryResults(
      page,
      limit,
      getAllUsers,
      getUsersWithPages
    );
    res.status(200).json(query);
  }
});

router.get("/searchField/:text", verify, async (req, res) => {
  const { text } = req.params;
  try {
    const query = await getUserBySearch(text);
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/buscar/:id", verify, async (req, res) => {
  const { id } = req.params;
  try {
    const query = await getUser(id);
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { UserName, Password } = req.body;
  //validacion de campos del formulario
  const { error } = await loginValidation(req.body);
  //console.log(error);
  if (error) return res.status(400).json(error.details[0].message);
  //verificacion de cedula en la base de datos
  const user = await getUser(UserName);
  if (user.length === 0) return res.status(400).json("Usuario no existe");

  //verificacion de contrasena
  if (!bcrypt.compareSync(Password, user[0].pswd))
    return res.status(400).json("Contraseña incorrecta.");
  const userValidated = {
    login: user[0].login,
    name: user[0].name,
    email: user[0].email,
    active: user[0].active,
    web: user[0].web,
    terminal: user[0].web,
  };

  try {
    //crear access token
    const accessToken = await generateAccessToken(userValidated);
    res.status(201).json({ accessToken: accessToken });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/register", verify, async (req, res) => {
  const { login, pswd, name, email, active, web, terminal } = req.body;
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
    const savedUser = await saveNewUser(
      login,
      hashpass,
      name,
      email,
      active,
      web,
      terminal
    );
    if (!savedUser) return res.status(400).json("error en creacion");
    res.status(201).json("success");
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.get("/validated", verify, async (req, res) => {
  const { login, name, email, active, web, terminal } = req.user;
  try {
    res.status(200).json({
      login,
      name,
      email,
      active,
      web,
      terminal,
    });
  } catch (err) {
    res.status(400).json(`error: ${err}`);
  }
});

router.put("/update", verify, async (req, res) => {
  const { login, name, email, active, web, terminal } = req.body;
  const { error } = await updateValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const query = await updateUserData(
      login,
      name,
      email,
      active,
      web,
      terminal
    );
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/reset-password", verify, async (req, res) => {
  const { login, password, repeat_password } = req.body;
  const { error } = resetValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  if (password !== repeat_password)
    return res.status(400).json("Contraseña deben ser iguales.");

  try {
    const hashpass = bcrypt.hashSync(password, 10);
    const query = await updatePassword(login, hashpass);
    res.status(201).json("success");
  } catch (error) {
    res.status(400).json(`error: ${error}`);
  }
});

module.exports = router;
