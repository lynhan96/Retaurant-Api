'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('foods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      foodCategoryId: {
        type: Sequelize.INTEGER
      },
      vendorId: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      oldPrice: {
        type: Sequelize.INTEGER
      },
      currentPrice: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.JSON
      },
      isView: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('foods')
  }
}
