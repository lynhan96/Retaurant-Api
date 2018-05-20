const R = require('ramda')

const errors = {
  400: 'Failed validation',
  401: 'Failed authentication',
  402: 'Invalid parameters',
  403: 'Database error',
  414: 'Profile not found',
  416: 'Invalid password',
  417: 'Data not exist',
  418: 'Email is existed',
  419: 'Permission Denined',
  420: 'Content not exist'
}

const errorParams = code => ({ code: code, message: errors[code] })

const responseError = (res, code) => res.status(200).send(errorParams(code))
exports.responseError = responseError

exports.customResponseError = (res, error) => res.status(200).send({ code: error.code, message: error.message })

exports.responseErrorWithData = (res, code, data) => res.status(200).send(R.merge(errorParams(code), { data: data }))

exports.responseError403 = res => responseError(res, 403)

exports.responseErrorWithNext = (next, res, code) => {
  res.status(200).send({ code: code, message: errors[code] })
  next('return')
}
