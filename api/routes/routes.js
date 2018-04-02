const employeeRoute = require('./admin/employeeRoute')
const loginRoute = require('./admin/loginRoute')
const foodCategoryRoute = require('./admin/foodCategoryRoute')

const foodRouteWebsite = require('./website/foodRoute')
const userRouteWebiste = require('./website/userRoute')
const loginRouteWebiste = require('./website/loginRoute')

module.exports = app => {
  employeeRoute(app)
  loginRoute(app)
  foodCategoryRoute(app)

  // website API
  foodRouteWebsite(app)
  userRouteWebiste(app)
  loginRouteWebiste(app)
}
