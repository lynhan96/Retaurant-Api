const employeeRoute = require('./admin/employeeRoute')
const loginRoute = require('./admin/loginRoute')
const foodCategoryRoute = require('./admin/foodCategoryRoute')
const foodRoute = require('./admin/foodRoute')
const userRoute = require('./admin/userRoute')
const eventRoute = require('./admin/eventRoute')

const foodRouteWebsite = require('./website/foodRoute')
const userRouteWebiste = require('./website/userRoute')
const loginRouteWebiste = require('./website/loginRoute')

const contactRouteWebsite = require('./website/contactRoute')
module.exports = app => {
    employeeRoute(app)
    loginRoute(app)
    foodCategoryRoute(app)
    foodRoute(app)
    userRoute(app)
    eventRoute(app)

    // website API
    foodRouteWebsite(app)
    userRouteWebiste(app)
    loginRouteWebiste(app)
    contactRouteWebsite(app)
}
