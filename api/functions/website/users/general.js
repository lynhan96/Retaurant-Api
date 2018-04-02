
const { reject, resolve, of } = require('fluture')
const R = require('ramda')
const md5 = require('md5')
const moment = require('moment')

const User = require('../../../../models/user')
const { Op } = require('../../../../models/sequelize')

exports.getUser = params => User.findOne({
    where: { email: params.emails}  
}).then(data=>data)

exports.checkUserExsit = user => user ? of(user) : reject(417)
exports.checkUserNotExsit = params => User.count({
    where: {email: params.email}
}).then(count=>{
    if (count != 0) {
        return Promise.reject(418)
    }
    return Promise.resolve()
})
exports.updateUser = (employee, params) => User.update(params)

exports.checkPassword = (profile, params) => profile.password === md5(params.password) ? of(profile) : reject(416)

exports.generateToken = _ => md5('BK-RT-' + moment.utc().format('YYYY-MM-DD hh:mm:ss'))

exports.register = params => User.create(params)
