const { of } = require('fluture')

const Employee = require('../../../../models/employee')
const Food = require('../../../../models/food')

exports.getDashboardInfo = params => {
  let employeeData = { 'admin': 0, 'waiter': 0, 'kitchen': 0, 'cashier': 0 }

  employeeData.admin = Employee.findAll({
    where: { position: 'Quản trị viên', vendorId: params.vendorId }
  }).length

  employeeData.waiter = Employee.findAll({
    where: { position: 'Nhân viên phục vụ', vendorId: params.vendorId }
  }).length

  employeeData.kitchen = Employee.findAll({
    where: { position: 'Nhân viên bếp', vendorId: params.vendorId }
  }).length

  employeeData.cashier = Employee.findAll({
    where: { position: 'Nhân viên thu ngân', vendorId: params.vendorId }
  }).length

  let foodData = { 'stillFood': 0, 'notStillFood': 0 }

  foodData.stillFood = Food.findAll({
    where: { status: 'Còn Món', vendorId: params.vendorId }
  }).length

  foodData.notStillFood = Food.findAll({
    where: { status: 'Hết Món', vendorId: params.vendorId }
  }).length

  return of({ 'employeeData': employeeData, 'foodData': foodData })
}
