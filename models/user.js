const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const User = sequelizeDb.define('users', {
  name: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING
  },
  password: {
    type: sequelize.STRING
  },
  phoneNumber: {
    type: sequelize.STRING
  },
  birthday: {
    type: sequelize.DATE
  },
  gender: {
    type: sequelize.STRING
  },
  isVip: {
    allowNull: false,
    type: sequelize.BOOLEAN,
    defaultValue: true
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

module.exports = User
