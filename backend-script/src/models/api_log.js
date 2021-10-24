const Sequelize = require('sequelize');
const db = require('../configs/db');

const ApiLog = db.define('ApiLog', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
  api_url: Sequelize.STRING,
  parameters: Sequelize.STRING,
}, {
  tableName: 'API_LOGS',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = ApiLog;
