const employeeRoute = require('./admin/employeeRoute')
const userRoute = require('./admin/userRoute')

module.exports = app => {
  employeeRoute(app)
  userRoute(app)
}
