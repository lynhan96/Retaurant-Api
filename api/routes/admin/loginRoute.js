const { login } = require('../../functions/admin/login')
module.exports = app => {
  app.route('/v1/login').post(login)
}
