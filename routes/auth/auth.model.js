const jwt = require("jsonwebtoken");
const { database } = require("../../database/database");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
  });
};

const getUser = (login) => {
  return database
    .select("*")
    .from("sec_users")
    .where("login", "=", login)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const saveNewUser = (login, hashpass, name, email, active) => {
  return database("sec_users")
    .insert({
      login: login,
      pswd: hashpass,
      name: name,
      email: email,
      active: active,
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
