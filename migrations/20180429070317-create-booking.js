'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      people: Sequelize.INTEGER,
      vendorId: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Đang chờ xác nhận', 'Hoàn thành', 'Hủy lịch']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bookings')
  }
}
