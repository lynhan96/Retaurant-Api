const { of } = require('fluture')

const Employee = require('../../../../models/employee')
const Food = require('../../../../models/food')
const User = require('../../../../models/user')

exports.getDashboardInfo = params => Promise.all([
  Employee.findAll({
    where: { position: 'Quản trị viên', vendorId: params.vendorId }
  }),
  Employee.findAll({
    where: { position: 'Nhân viên phục vụ', vendorId: params.vendorId }
  }),
  Employee.findAll({
    where: { position: 'Nhân viên bếp', vendorId: params.vendorId }
  }),
  Employee.findAll({
    where: { position: 'Nhân viên thu ngân', vendorId: params.vendorId }
  }),
  Food.findAll({
    where: { status: 'Còn Món', vendorId: params.vendorId }
  }),
  Food.findAll({
    where: { status: 'Hết Món', vendorId: params.vendorId }
  }),
  User.findAll({
    where: { vendorId: params.vendorId }
  })
]).then(data => data)
