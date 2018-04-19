
const { reject, of } = require('fluture')
const R = require('ramda')
const md5 = require('md5')
const moment = require('moment')

const User = require('../../../../models/user')
const { Op } = require('../../../../models/sequelize')


exports.getUser = params => Promise.all([User.findAll({
    where: { email: params.email }
})
]).then(data => data)

exports.checkUserExsit = user =>  R.flatten(user).length > 0 ? of(R.flatten(user)[0]) : reject(414)

exports.checkUserNotExsit = params => User.count({
    where: { email: params.email }
}).then(count => {
    if (count != 0) {
        return Promise.reject(418)
    }
    return Promise.resolve()
})
exports.updateUser = (employee, params) => User.update(params)

exports.checkPassword = (user, params) => user.password === md5(params.password) ? of(user) : reject(416)

exports.generateToken = _ => md5('BK-RT-' + moment.utc().format('YYYY-MM-DD hh:mm:ss'))

exports.register = (params) => User.create(params)
