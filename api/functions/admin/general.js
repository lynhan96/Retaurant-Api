const Employee = require('../../../models/employee')

exports.getEmployeeProfile = params => Employee.findOne({where: {email: params.email}})
