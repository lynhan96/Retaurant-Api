const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const EventCode = sequelizeDb.define('event_codes', {
  code: {
    type: sequelize.STRING
  },
  available: {
    type: sequelize.INTEGER
  },
  vendorId: {
    type: sequelize.INTEGER
  },
  used: {
    type: sequelize.INTEGER
  },
  eventId: {
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

module.exports = EventCode
