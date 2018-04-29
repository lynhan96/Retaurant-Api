const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Booking = sequelizeDb.define('bookings', {
  name: sequelize.STRING,
  phoneNumber: sequelize.STRING,
  vendorId: {
    type: sequelize.INTEGER
  },
  people: sequelize.INTEGER,
  note: sequelize.STRING,
  createdAt: {
    type: sequelize.DATE
  },
  time: {
    type: sequelize.DATE
  },
  status: {
    type: sequelize.ENUM,
    values: ['pending', 'done', 'cancelled']
  }
}, {
  freezeTableName: true
})

module.exports = Booking
