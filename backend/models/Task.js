const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Task = sequelize.define('Task', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  description: { type: DataTypes.STRING, allowNull: false },
});

sequelize.sync(); // Create table if not exists

module.exports = Task;
