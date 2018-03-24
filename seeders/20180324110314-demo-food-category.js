'use strict'
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('food_categories', [{
      name: 'Lẫu',
      description: 'Đặc tả',
      vendorId: 1,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Đồ Nướng',
      description: 'Đặc tả',
      vendorId: 1,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Món Chay',
      description: 'Đặc tả',
      vendorId: 1,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
  }
}
