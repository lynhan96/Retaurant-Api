const employeeRoute = require('./admin/employeeRoute')
const loginRoute = require('./admin/loginRoute')
const foodCategoryRoute = require('./admin/foodCategoryRoute')

const foodRouteWebsite = require('./website/foodRoute')

const userRouteWebsite = require('./website/userRoute')
const contactRouteWebsite = require('./website/contactRoute')
module.exports = app => {
    employeeRoute(app)
    loginRoute(app)
    foodCategoryRoute(app)

    // website API
    foodRouteWebsite(app)
    userRouteWebsite(app)
    contactRouteWebsite(app)
}
