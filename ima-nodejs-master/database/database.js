const knex = require("knex");

const database = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

//exportacion de base de datos con instancia en el ORM knex
module.exports.database = database;
