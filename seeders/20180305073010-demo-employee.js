'use strict'
const moment = require('moment')
const { generateToken } = require('../api/functions/admin/general')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('employees', [{
      name: 'Nguyen Van A',
      position: 'Quản trị viên',
      email: 'quantrivien@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 1,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van B',
      position: 'Nhân viên kho',
      email: 'nhanvienkho@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 1,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van C',
      position: 'Nhân viên phục vụ',
      email: 'phucvu@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 1,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van D',
      position: 'Nhân viên bếp',
      email: 'nhabep@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 1,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyễn Văn E',
      position: 'Nhân viên thu ngân',
      email: 'thungan@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 1,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van A 1',
      position: 'Quản trị viên',
      email: 'quantrivien1@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 2,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van B 1',
      position: 'Nhân viên kho',
      email: 'nhanvienkho1@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 2,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van C 1',
      position: 'Nhân viên phục vụ',
      email: 'phucvu1@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 2,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyen Van D 1',
      position: 'Nhân viên bếp',
      email: 'nhabep1@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 2,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Nguyễn Văn E 1',
      position: 'Nhân viên thu ngân',
      email: 'thungan1@gmail.com',
      password: '4297f44b13955235245b2497399d7a93',
      phoneNumber: '+842345678',
      birthday: moment.utc().subtract(10, 'years').format('YYYY-MM-DD hh:mm:ss'),
      gender: 'Nam',
      vendorId: 2,
      token: generateToken(),
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
  }
}
