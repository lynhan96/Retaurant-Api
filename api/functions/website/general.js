const R = require('ramda')
const md5 = require('md5')
const moment = require('moment')
const { of, reject } = require('fluture')

const User = require('../../../models/user')

exports.getProfile = params => User.findAll({
  where: {email: params.email}
}).then(data => data)

exports.checkProfileExist = profile => R.flatten(profile).length > 0 ? of(R.flatten(profile)[0]) : reject(414)

exports.checkPassword = (profile, params) => profile.password === md5(params.password) ? of(profile) : reject(416)

exports.generateToken = _ => md5('BK-RT-' + moment.utc().format('YYYY-MM-DD hh:mm:ss'))
