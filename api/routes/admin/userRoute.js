const { Signup } = require('../../functions/admin/users/signup')

module.exports = app => {
  app.route('/v1/signup').post(Signup)
}
