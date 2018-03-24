const employeeRoute = require('./admin/employeeRoute')
const loginRoute = require('./admin/loginRoute')
const foodCategoryRoute = require('./admin/foodCategoryRoute')

module.exports = app => {
  employeeRoute(app)
  loginRoute(app)
  foodCategoryRoute(app)
}
