const jwt = require("jsonwebtoken");
const { database } = require("../../database/database");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
  });
};

const getUser = (UserName) => {
  return database
    .select("*")
    .from("usuario")
    .where("cedula", "=", UserName)
    .then((user) => {
      if (user.length === 0) return false;
      return user;
    })
    .catch((err) => {
      return false;
    });
};

const saveNewUser = (newUser) => {
  return database("usuario")
    .insert({
      id_user: newUser.id_user,
      pass: newUser.pass,
      id_direccion: newUser.id_direccion,
      id_departamento: newUser.id_departamento,
      nombre: newUser.nombre,
      apellido: newUser.apellido,
      cedula: newUser.cedula,
    })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      return false;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.generateAccessToken = generateAccessToken;
module.exports.getUser = getUser;
module.exports.saveNewUser = saveNewUser;
