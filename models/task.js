const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definición del modelo Task
const Task = sequelize.define('Task', {
    // ID autoincremental para cada tarea 
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true 
    },
    // Título de la tarea 
    title: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    // Descripción de la tarea 
    description: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    // Estado de la tarea (completada o no)
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
    }
});

module.exports = Task;