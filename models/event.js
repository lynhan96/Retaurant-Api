const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Event = sequelizeDb.define('events', {
  name: {
    type: sequelize.STRING
  },
  description: {
    type: sequelize.STRING
  },
  isView: {
    allowNull: false,
    type: sequelize.BOOLEAN,
    defaultValue: true
  },
  startDate: {
    allowNull: false,
    type: sequelize.DATE
  },
  endDate: {
    allowNull: false,
    type: sequelize.DATE
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
