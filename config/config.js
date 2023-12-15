const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('tech_blogdb', 'root', 'root', {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
