const { updateUser } = require('../../functions/website/user/updateUser')
const { createUser } = require('../../functions/website/user/createUser')

module.exports = app => {
  app.route('/website/v1/updateUser').post(updateUser)
  app.route('/website/v1/createUser').post(createUser)
}
