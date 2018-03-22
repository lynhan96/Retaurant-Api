const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Zone = sequelizeDb.define('zones', {
  name: {
    type: sequelize.STRING
  },
  vendorId: {
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

module.exports = Zone
