const R = require('ramda')
const md5 = require('md5')
const { of, reject } = require('fluture')

const Employee = require('../../../models/employee')
const Vendor = require('../../../models/vendor')

exports.getProfile = params => Promise.all([
  Employee.findAll({
    where: {email: params.email}
  }),
  Vendor.findAll({
    where: {email: params.email}
  })
]).then(data => data)

exports.checkProfileExist = profile => R.flatten(profile).length > 0 ? of(R.flatten(profile)[0]) : reject(414)

exports.checkPassword = (profile, params) => profile.password === md5(params.password) ? of(profile) : reject(416)
