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
  where: { position: {
    [Op.ne]: 'administrator'
  } },
  attributes: employeeAttrs
})
