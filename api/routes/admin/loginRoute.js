const { login } = require('../../functions/admin/login')
const { waiterLogin } = require('../../functions/admin/waiterLogin')
const { forgotPassword } = require('../../functions/admin/forgotPassword')

module.exports = app => {
  app.route('/v1/login').post(login)
  app.route('/v1/waiterLogin').post(waiterLogin)
  app.route('/v1/forgotPassword').post(forgotPassword)
}
