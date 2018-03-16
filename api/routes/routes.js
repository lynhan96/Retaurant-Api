const employeeRoute = require('./admin/employeeRoute')
const userRoute = require('./website/userRoute')

module.exports = app => {
  employeeRoute(app)
  userRoute(app)
}
