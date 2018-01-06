const employeeTable = require('../../database/tables/employeeTable')

exports.getEmployeeProfile = params => employeeTable.findOne({where: {email: params.email}})
