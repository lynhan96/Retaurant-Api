const R = require('ramda')
const validator = require('validator')

const { responseError } = require('../helpers/responseErrorHelper')

const isFilledValue = value => value !== null && value.toString() !== ''

exports.isValidEmail = (res, email) => {
  if (!validator.isEmail(email)) {
    responseError(res, 412)
    return false
  }
  return true
}

exports.isEqual = (res, code, string, comparison) => {
  if (!validator.equals(string, comparison)) {
    responseError(res, code)
    return false
  }
  return true
}

exports.paramsExistedOrEmpty = (res, params, requiredParams, filledParams) => {
  if (requiredParams) {
    const neededParams = R.pick(requiredParams, params)
    if (R.keys(neededParams).length < requiredParams.length) {
      responseError(res, 402)
      return false
    }
  }

  if (filledParams) {
    const isFilledValues = R.pipe(
      R.pick(filledParams),
      R.values(R.__, params),
      R.map(isFilledValue),
      R.all(R.equals(true))
    )(params)

    if (!isFilledValues) {
      responseError(res, 402)
      return false
    }
  }

  return true
}
