const R = require('ramda')
const md5 = require('md5')
const moment = require('moment')
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

exports.checkWaiterProfileExist = profile => {
  if (R.flatten(profile).length < 1) return reject(414)

  const flattenProfile = R.flatten(profile)[0]

  if (flattenProfile.position !== 'Nhân viên phục vụ') return reject(419)

  return of(flattenProfile)
}

exports.checkKitchenProfileExist = profile => {
  if (R.flatten(profile).length < 1) return reject(414)

  const flattenProfile = R.flatten(profile)[0]

  if (flattenProfile.position !== 'Nhân viên bếp') return reject(419)

  return of(flattenProfile)
}

exports.checkAdminProfileExist = profile => {
  if (R.flatten(profile).length < 1) return reject(414)

  const flattenProfile = R.flatten(profile)[0]

  if (flattenProfile.position !== 'Quản trị viên' && flattenProfile.position !== 'vendor') return reject(419)

  return of(flattenProfile)
}

exports.checkProfileExist = profile => R.flatten(profile).length > 0 ? of(R.flatten(profile)[0]) : reject(414)

exports.checkPassword = (profile, params) => profile.password === md5(params.password) ? of(profile) : reject(416)

exports.generateToken = _ => md5('BK-RT-' + moment.utc().format('YYYY-MM-DD hh:mm:ss'))

exports.updatePassword = (arrProfile, newPassword) => {
  const profile = R.flatten(arrProfile)[0]

  if (profile.position !== 'vendor') {
    return Employee.update({
      password: md5(newPassword)
    }, {
      where: {email: profile.email}
    })
  }

  return Vendor.update({
    password: md5(newPassword)
  }, {
    where: {email: profile.email}
  })
}
