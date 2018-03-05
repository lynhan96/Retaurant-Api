const { login } = require('../../functions/admin/employees/login')

module.exports = app => {
  app.route('/v1/login').post(login)
}
