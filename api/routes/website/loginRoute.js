const { login } = require('../../functions/website/login')

module.exports = app => {
  app.route('/website/v1/login').post(login)
}
