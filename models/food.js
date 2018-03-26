const sequelize = require('sequelize')

const sequelizeDb = require('./sequelize')

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
    type: sequelize.ARRAY(Sequelize.TEXT)
  },
  startDate: {
    allowNull: false,
    type: sequelize.DATE,
    defaultValue: sequelize.NOW
  },
  endDate: {
    allowNull: false,
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

module.exports = Food
