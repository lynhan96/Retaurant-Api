
const { reject, of } = require('fluture')
const md5 = require('md5')
const moment = require('moment')

const User = require('../../../../models/user')

exports.getUser = params => User.findOne({
  where: { email: params.email }
})

exports.checkUserExsit = user => user ? of(user) : reject(414)

exports.checkUserNotExsit = (params, user) => user ? reject(418) : of(params)

exports.updateUser = (employee, params) => User.update(params)

exports.checkPassword = (user, params) => user.password === md5(params.password) ? of(user) : reject(416)

exports.generateToken = _ => md5('BK-RT-' + moment.utc().format('YYYY-MM-DD hh:mm:ss'))

exports.createUser = (params) => User.create(params)
