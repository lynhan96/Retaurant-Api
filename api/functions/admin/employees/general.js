const { reject, of } = require('fluture')
const md5 = require('md5')
const Employee = require('../../../../models/employee')
const { Op } = require('../../../../models/sequelize')

exports.checkUserExist = user => user ? of(user) : reject(414)

exports.checkPassword = (profile, params) => profile.password === md5(params.password) ? of(profile) : reject(416)

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
    position: {
      [Op.ne]: 'administrator'
    }
  },
  attributes: employeeAttrs,
  order: [['id', 'ASC']]
})

exports.getEmployeesByKeyWord = params => Employee.findAll({
  where: {
    position: {
      [Op.ne]: 'administrator'
    },
    [Op.or]: [
      {name: { [Op.iLike]: '%' + params.keyword + '%' }},
      {position: { [Op.iLike]: '%' + params.keyword + '%' }}
    ]
  },
  attributes: employeeAttrs,
  order: [['id', 'ASC']]
})

exports.getEmployee = params => Employee.findOne({
  where: { id: params.employeeId }
})

exports.checkEmployeeExsit = employee => employee ? of(employee) : reject(417)

exports.updateEmployee = (employee, params) => employee.update(params)

exports.createEmployee = params => Employee.create(params)

exports.deleteEmployee = employee => employee.destroy()
