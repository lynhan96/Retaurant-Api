const { reject, of } = require('fluture')
const R = require('ramda')

const Employee = require('../../../../models/employee')
const { Op } = require('../../../../models/sequelize')

const employeeAttrs = [
  'id',
  'name',
  'email',
  'phoneNumber',
  'position',
  'birthday',
  'gender',
  'createdAt',
  'updatedAt'
]

exports.getEmployees = params => Employee.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: employeeAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getEmployeesLimit = params => Employee.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: employeeAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getEmployeesByKeyWord = params => Employee.findAll({
  where: {
    vendorId: params.vendorId,
    [Op.or]: [
      {name: { [Op.iLike]: '%' + R.toLower(params.keyword) + '%' }},
      {position: { [Op.iLike]: '%' + R.toLower(params.keyword) + '%' }}
    ]
  },
  attributes: employeeAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getEmployee = params => Employee.findOne({
  where: { id: params.employeeId, vendorId: params.vendorId }
})

exports.checkEmployeeExsit = employee => employee ? of(employee) : reject(417)

exports.updateEmployee = (employee, params) => employee.update(params)

exports.createEmployee = params => Employee.create(params)

exports.deleteEmployee = employee => employee.destroy()
