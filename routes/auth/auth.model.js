const jwt = require("jsonwebtoken");
const { database } = require("../../database/database");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
  });
};

const getAllUsers = () => {
  return database
    .select("*")
    .from("sec_users")
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const getUsersWithPages = (offset, limit) => {
  return database
    .select("*")
    .from("sec_users")
    .limit(limit)
    .offset(offset)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const getUserBySearch = (text) => {
  return database
    .select("*")
    .from("sec_users")
    .where("login", "like", `%${text}%`)
    .orWhere("name", "like", `%${text}%`)
    .orWhere("email", "like", `%${text}%`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const paginateQueryResults = async (page, limit, getAll, getWithPages) => {
  const offset = limit * page - limit;
  const endIndex = page * limit;
  const results = {};
  const total = await getAll();
  results.total = total.length;

  if (endIndex < total.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (page > 1) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = await getWithPages(offset, limit);
  return results;
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

const saveNewUser = (login, hashpass, name, email, active, web, terminal) => {
  return database("sec_users")
    .insert({
      login: login,
      pswd: hashpass,
      name: name,
      email: email,
      active: active ? "Y" : "N",
      web: web,
      terminal: terminal,
    })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      return false;
    });
};

const updatePassword = (login, password) => {
  return database("sec_users")
    .update({
      pswd: password,
    })
    .where("login", "=", login)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const updateUserData = (login, name, email, active, web, terminal) => {
  return database("sec_users")
    .update({
      name: name,
      email: email,
      active: active ? "Y" : "N",
      web: web,
      terminal: terminal,
    })
    .where("login", "=", login)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

//exportacion de funciones verificacion y consulta de data de usuario
module.exports.generateAccessToken = generateAccessToken;
module.exports.getUser = getUser;
module.exports.saveNewUser = saveNewUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUsersWithPages = getUsersWithPages;
module.exports.paginateQueryResults = paginateQueryResults;
module.exports.getUserBySearch = getUserBySearch;
module.exports.updatePassword = updatePassword;
module.exports.updateUserData = updateUserData;
