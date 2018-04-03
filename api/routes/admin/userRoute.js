const { listUsers } = require('../../functions/admin/users/listUsers')
const { updateUser } = require('../../functions/admin/users/updateUser')
const { createUser } = require('../../functions/admin/users/createUser')
const { deleteUser } = require('../../functions/admin/users/deleteUser')

module.exports = app => {
  app.route('/v1/users').post(listUsers)
  app.route('/v1/updateUser').post(updateUser)
  app.route('/v1/createUser').post(createUser)
  app.route('/v1/deleteUser').post(deleteUser)
}
