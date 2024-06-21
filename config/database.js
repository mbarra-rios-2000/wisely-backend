const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargar variables de entorno desde .env
dotenv.config();

// Configuración de la conexión de la base de datos
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;