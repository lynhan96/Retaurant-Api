const { updateUser } = require('../../functions/website/user/updateUser')
const { register } = require('../../functions/website/users/register')

module.exports = app => {
  app.route('/website/v1/register').post(register)
  app.route('/website/v1/updateUser').post(updateUser)
}
