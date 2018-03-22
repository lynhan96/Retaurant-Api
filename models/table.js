const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Table = sequelizeDb.define('tables', {
  name: {
    type: sequelize.STRING
  },
  zoneId: {
    type: sequelize.INTEGER
  },
  vendorId: {
    type: sequelize.INTEGER
  },
  createdAt: {
    type: sequelize.DATE
  },
  updatedAt: {
    type: sequelize.DATE
  }
}, {
  freezeTableName: true
})

module.exports = Table
