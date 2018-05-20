const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const Food = sequelizeDb.define('about_us', {
  vendorId: {
    allowNull: false,
    type: sequelize.INTEGER
  },
  description: {
    type: sequelize.TEXT
  },
  imageUrl: {
    type: sequelize.JSON
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

module.exports = Food
