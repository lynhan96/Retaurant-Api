const { aboutUs } = require('../../functions/admin/aboutUs/aboutUs')
const { updateAboutUs } = require('../../functions/admin/aboutUs/updateAboutUs')

module.exports = app => {
  app.route('/v1/aboutUs').post(aboutUs)
  app.route('/v1/updateAboutUs').post(updateAboutUs)
}
