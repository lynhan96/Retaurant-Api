'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('food_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      isView: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      vendorId: {
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      description: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('food_categories')
  }
}
