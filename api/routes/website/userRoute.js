const { register } = require('../../functions/website/users/register')
const { login } = require('../../functions/website/users/login')
module.exports = app => {
    app.route('/v1/website/register').post(register)
    app.route('/v1/website/login').post(login)
}