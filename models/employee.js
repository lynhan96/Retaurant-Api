const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Employee = sequelizeDb.define('employees', {
  phoneNumber: sequelize.STRING,
  vendorId: {
    allowNull: false,
    type: sequelize.INTEGER
  },
  name: sequelize.STRING,
  token: sequelize.STRING,
  email: sequelize.STRING,
  position: sequelize.STRING,
  birthday: sequelize.DATE,
  gender: sequelize.STRING,
  password: sequelize.STRING,
  createdAt: {
    type: sequelize.DATE
  },
  updatedAt: {
    type: sequelize.DATE
  }
}, {
  freezeTableName: true
})

module.exports = Employee
