const sequelize = require('sequelize')

const sequelizeDb = require('../sequelize')

const employeeTable = sequelizeDb.define('employees', {
  phoneNumber: {
    type: sequelize.STRING,
    field: 'phone_number'
  },
  name: sequelize.STRING,
  email: sequelize.STRING,
  position: sequelize.STRING,
  birthday: sequelize.DATE,
  gender: sequelize.STRING,
  password: sequelize.STRING
}, {
  freezeTableName: true
})

module.exports = employeeTable
