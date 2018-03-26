const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

const FoodCategory = sequelizeDb.define('food_categories', {
  name: {
    type: sequelize.STRING
  },
  isView: {
    defaultValue: true,
    type: sequelize.BOOLEAN
  },
  description: {
    type: sequelize.TEXT
  },
  vendorId: {
    allowNull: false,
    type: sequelize.INTEGER
  },
  imageUrl: {
    type: sequelize.ARRAY(sequelize.TEXT)
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
