const employeeRoute = require('./admin/employeeRoute')

module.exports = app => {
  employeeRoute(app)
}
