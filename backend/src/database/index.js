const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize();

module.exports = connection;
