const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Table = sequelizeDb.define('tables', {
  name: {
    type: sequelize.STRING
  },
  zoneId: {
    type: sequelize.INTEGER
  },
  createdAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW
  },
  updatedAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW
  }
}, {
  freezeTableName: true
})

module.exports = Table
