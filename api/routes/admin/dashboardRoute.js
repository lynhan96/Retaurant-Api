const { dashboard } = require('../../functions/admin/dashboard/dashboard')

module.exports = app => {
  app.route('/v1/dashboard').post(dashboard)
}
