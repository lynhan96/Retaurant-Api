const { registerUser } = require('../../functions/website/users/register')
const { loginUser } = require('../../functions/website/users/login')
module.exports = app => {
    app.route('/v1/website/register').post(registerUser)
    app.route('/v1/website/login').post(loginUser)
}