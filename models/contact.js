const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Contact = sequelizeDb.define('contact', {
  name: sequelize.STRING,
  phoneNumber: sequelize.STRING,
  email: sequelize.STRING,
  address: sequelize.STRING,
  message: sequelize.STRING,
  createdAt: {
    type: sequelize.DATE
  },
  updatedAt: {
    type: sequelize.DATE
  }
}, {
  freezeTableName: true
})

module.exports = Contact
