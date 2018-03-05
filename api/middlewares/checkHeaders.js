const R = require('ramda')
const moment = require('moment')
const md5 = require('md5')
const { Future, encaseP, reject, of } = require('fluture')

const { responseErrorWithNext: responseError } = require('../helpers/responseErrorHelper')
const { getEmployeeProfile } = require('../functions/admin/general')

const requiredHeaders = ['authorization', 'content-type', 'date-time', 'x-api-language', 'uid', 'token']
const requiredAuthenticationUrls = [
  '/v1/profile',
  '/v1/updateProfile'
]

const checkUserExist = profile => profile ? of(profile) : reject(401)

const checkHeaderValues = (next, res, headers) => {
  if (R.keys(headers).length < requiredHeaders.length) {
    responseError(next, res, 400)
  }
}

const checkRequestDatetime = (next, res, headers) => {
  const requestDatetime = headers['date-time']
  const minDatetime = moment.utc().subtract(10, 'minutes').format('YYYY-MM-DD hh:mm:ss')
  const maxDatetime = moment.utc().add(10, 'minutes').format('YYYY-MM-DD hh:mm:ss')

  if (minDatetime > requestDatetime || requestDatetime > maxDatetime) {
    responseError(next, res, 400)
  }
}

const checkAuthenticationValue = (profile, date, authorization) => {
  const { id, token } = profile.dataValues
  return (authorization === md5(md5(token + id + date))) ? of('') : reject(401)
}

const checkAuthentication = (next, res, headers) => {
  const { uid, date, authorization } = headers

  if (uid && date && authorization) {
    Future.of(uid)
      .chain(encaseP(getEmployeeProfile))
      .chain(checkUserExist)
      .chain(profile => checkAuthenticationValue(profile, date, authorization))
      .fork(
        errorCode => responseError(next, res, errorCode),
        data => next()
      )
  } else {
    responseError(next, res, 401)
  }
}

module.exports = (req, res, next) => {
  const { headers, originalUrl } = req
  const neededHeaders = R.pick(requiredHeaders, headers)

  // checkHeaderValues(next, res, neededHeaders)
  // checkRequestDatetime(next, res, neededHeaders)

  if (R.indexOf(originalUrl, requiredAuthenticationUrls) === -1) {
    next()
  } else {
    checkAuthentication(next, res, headers)
  }
}
