const employeeTable = require('../../../models/user')

exports.getEmployeeProfile = params => employeeTable.findOne({where: {email: params.email}})
