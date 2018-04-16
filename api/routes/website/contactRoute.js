const { createContact } = require('../../functions/website/contact/contact')
module.exports = app => {
  app.route('/v1/website/contact').post(createContact)
}
