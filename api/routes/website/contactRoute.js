const { createContact } = require('../../functions/website/contact/contact')
module.exports = app => {
  app.route('/website/v1/contact').post(createContact)
}
