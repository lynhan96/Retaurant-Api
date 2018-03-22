const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const FoodCategory = sequelizeDb.define('food_categories', {
  name: {
    type: sequelize.STRING
  },
  isView: {
    allowNull: false,
    type: sequelize.BOOLEAN,
    defaultValue: true
  },
  description: {
    type: sequelize.STRING
  },
  vendorId: {
    allowNull: false,
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

module.exports = FoodCategory
