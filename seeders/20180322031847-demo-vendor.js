'use strict'
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vendors', [{
      name: 'Trần văn B',
      position: 'vendor',
      email: 'vendor1@gmail.com',
      restaurantName: 'Nhà hàng đại dương',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      gender: 'Nam',
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
  }
}
