const { aboutUs } = require('../../functions/website/aboutUs/aboutUs')
module.exports = app => {
  app.route('/website/v1/aboutUs').get(aboutUs)
}
