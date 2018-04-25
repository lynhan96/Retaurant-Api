const R = require('ramda')
const moment = require('moment')
const md5 = require('md5')
const { Future, encaseP, reject, of } = require('fluture')

const { responseErrorWithNext: responseError } = require('../helpers/responseErrorHelper')
const Employee = require('../../models/employee')
const Vendor = require('../../models/vendor')

const requiredHeaders = ['authorization', 'content-type', 'date-time', 'x-api-language', 'uid', 'token']
const requiredAuthenticationUrls = [
  '/v1/login',
  '/v1/waiterLogin',
  '/v1/forgotPassword'
]

const notAuthenticationUrls = [
  '/website/v1/food',
  '/website/v1/foods',
  '/website/v1/createUser',
  '/website/v1/login',
  '/website/v1/contact',
  '/website/v1/updateUser'
]

const getProfile = headers => Promise.all([
  Employee.findAll({
    where: {id: headers.uid, token: headers.token}
  }),
  Vendor.findAll({
    where: {id: headers.uid, token: headers.token}
  })
]).then(data => data)

const checkProfileExist = profile => R.flatten(profile).length > 0 ? of(R.flatten(profile)[0]) : reject(414)

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
  const { uid, authorization } = headers
  const date = headers['date-time']

  if (uid && date && authorization) {
    Future.of(headers)
      .chain(encaseP(getProfile))
      .chain(checkProfileExist)
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

  if (req._parsedUrl && req._parsedUrl.pathname && R.indexOf(req._parsedUrl.pathname, notAuthenticationUrls) !== -1) {
    return next()
  }

  checkHeaderValues(next, res, neededHeaders)
  // checkRequestDatetime(next, res, neededHeaders)

  if (R.indexOf(originalUrl, requiredAuthenticationUrls) !== -1) {
    next()
  } else {
    checkAuthentication(next, res, headers)
  }
}
