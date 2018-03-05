'use strict'
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('employees', [{
      name: 'Nguyen Van A',
      position: 'administrator',
      email: 'quantrivien@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'male',
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van B',
      position: 'warehouse',
      email: 'nhanvienkho@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'male',
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van C',
      position: 'waiter',
      email: 'phucvu@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'male',
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van D',
      position: 'kitchen',
      email: 'nhabep@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'male',
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van E',
      position: 'cashier',
      email: 'thungan@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'male',
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
  }
}
