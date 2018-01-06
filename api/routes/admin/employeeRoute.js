const { login } = require('../../functions/admin/users/login')

module.exports = app => {
  app.route('/v1/login').post(login)
}
