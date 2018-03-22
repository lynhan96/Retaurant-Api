const { employees } = require('../../functions/admin/employees/employees')
const { updateEmployee } = require('../../functions/admin/employees/updateEmployee')
const { createEmployee } = require('../../functions/admin/employees/createEmployee')
const { deleteEmployee } = require('../../functions/admin/employees/deleteEmployee')

module.exports = app => {
  app.route('/v1/employees').post(employees)
  app.route('/v1/updateEmployee').post(updateEmployee)
  app.route('/v1/createEmployee').post(createEmployee)
  app.route('/v1/deleteEmployee').post(deleteEmployee)
}
