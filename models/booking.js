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
    values: ['Đang chờ', 'Đã hoàn thành', 'Đã hủy']
  }
}, {
  freezeTableName: true
})

module.exports = Booking
