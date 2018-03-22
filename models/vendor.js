const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const User = sequelizeDb.define('vendors', {
  name: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING
  },
  password: {
    type: sequelize.STRING
  },
  token: {
    type: sequelize.STRING
  },
  restaurantName: {
    type: sequelize.STRING
  },
  restaurantDomainName: {
    type: sequelize.STRING
  },
  position: {
    allowNull: false,
    type: sequelize.ENUM('vendor'),
    defaultValue: 'vendor'
  },
  gender: sequelize.STRING,
  phoneNumber: {
    type: sequelize.STRING
  },
  expiredDate: {
    type: sequelize.DATE
  },
  imageUrl: {
    type: sequelize.STRING
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

module.exports = User
