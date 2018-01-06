const R = require('ramda')

const errors = {
  400: 'Failed validation',
  401: 'Failed authentication',
  402: 'Invalid parameters',
  403: 'Database error',
  411: 'Email existed',
  412: 'Invalid email',
  413: 'Invalid password',
  414: 'Profile not found',
  415: 'Profile not activated',
  416: 'Invalid password',
  417: 'Profile activated',
  418: 'Invalid verify code',
  419: 'Cannot find password code',
  420: 'Password code expired',
  421: 'Promo not found',
  422: 'Content not found',
  423: 'Tour not found',
  424: 'Phone number existed',
  425: 'Tour detail not found',
  426: 'Not enough capacity in tour',
  427: 'Not enough adult capacity in tour',
  428: 'Not enough child capacity in tour',
  429: 'Not enough infant capacity in tour',
  430: 'Invalid departure date',
  431: 'Visa not found',
  432: 'Transportation not found',
  433: 'Invalid start date or end date',
  434: 'Passport not found',
  435: 'Booking not found',
  436: 'Invalid check in date or check out date',
  437: 'Search flight server error',
  438: 'Booking flight server error'
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
