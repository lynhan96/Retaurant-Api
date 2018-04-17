const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Event = sequelizeDb.define('events', {
  name: {
    type: sequelize.STRING
  },
  description: {
    type: sequelize.STRING
  },
  vendorId: {
    allowNull: false,
    type: sequelize.INTEGER
  },
  isView: {
    allowNull: false,
    type: sequelize.BOOLEAN,
    defaultValue: true
  },
  imageUrl: {
    type: sequelize.JSON
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

module.exports = Event
