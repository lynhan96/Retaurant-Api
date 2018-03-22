const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Bill = sequelizeDb.define('bills', {
  transactionID: {
    type: sequelize.STRING
  },
  status: {
    type: sequelize.STRING
  },
  vendorId: {
    type: sequelize.INTEGER
  },
  paymentMethod: {
    type: sequelize.STRING
  },
  totalPrice: {
    type: sequelize.INTEGER
  },
  voucherCode: {
    type: sequelize.STRING
  },
  discountPrice: {
    type: sequelize.INTEGER
  },
  discountPercentage: {
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

module.exports = Bill
