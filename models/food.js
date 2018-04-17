const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')
const FoodCategory = require('./foodCategory')

const Food = sequelizeDb.define('foods', {
  name: sequelize.STRING,
  foodCategoryId: sequelize.INTEGER,
  oldPrice: sequelize.INTEGER,
  currentPrice: sequelize.INTEGER,
  status: sequelize.STRING,
  isView: {
    allowNull: false,
    type: sequelize.BOOLEAN,
    defaultValue: true
  },
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
  startDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW
  },
  endDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW
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

Food.belongsTo(FoodCategory, {as: 'foodCategory'})

module.exports = Food
