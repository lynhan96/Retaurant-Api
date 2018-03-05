const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Bill = sequelizeDb.define('bills', {
  transactionID: {
    type: sequelize.STRING
  },
  status: {
    type: sequelize.STRING
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

module.exports = Bill
