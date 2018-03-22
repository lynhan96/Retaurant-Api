const employeeRoute = require('./admin/employeeRoute')
const loginRoute = require('./admin/loginRoute')

module.exports = app => {
  employeeRoute(app)
  loginRoute(app)
}
