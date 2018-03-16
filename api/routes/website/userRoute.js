const { login } = require('../../functions/admin/employees/login')
const { employees } = require('../../functions/admin/employees/employees')

module.exports = app => {
  app.route('/v1/login').post(login)
  app.route('/v1/employees').post(employees)
}
