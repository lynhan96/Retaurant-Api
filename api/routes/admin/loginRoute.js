const { login } = require('../../functions/admin/login')
const { waiterLogin } = require('../../functions/admin/waiterLogin')
const { kitchenLogin } = require('../../functions/admin/kitchenLogin')
const { forgotPassword } = require('../../functions/admin/forgotPassword')
const { cashierLogin } = require('../../functions/admin/cashierLogin')

module.exports = app => {
  app.route('/v1/login').post(login)
  app.route('/v1/waiterLogin').post(waiterLogin)
  app.route('/v1/kitchenLogin').post(kitchenLogin)
  app.route('/v1/cashierLogin').post(cashierLogin)
  app.route('/v1/forgotPassword').post(forgotPassword)
}
