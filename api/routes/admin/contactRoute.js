const { contacts } = require('../../functions/admin/contacts/contacts')
const { deleteContact } = require('../../functions/admin/contacts/deleteContact')
const { seenContact } = require('../../functions/admin/contacts/seenContact')

module.exports = app => {
  app.route('/v1/contacts').post(contacts)
  app.route('/v1/deleteContact').post(deleteContact)
  app.route('/v1/seenContact').post(seenContact)
}
