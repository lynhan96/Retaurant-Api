const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const employeeTable = sequelizeDb.define('users', {
  phoneNumber: {
    type: sequelize.STRING
  },
  name: sequelize.STRING,
  email: sequelize.STRING,
  position: sequelize.STRING,
  birthday: sequelize.DATE,
  gender: sequelize.STRING,
  password: sequelize.STRING,
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

module.exports = employeeTable
