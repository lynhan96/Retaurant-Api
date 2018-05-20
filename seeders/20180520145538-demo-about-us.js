'use strict'
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('about_us', [{
      description: 'Thông tin nhà hàng',
      vendorId: 1,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
  }
}
