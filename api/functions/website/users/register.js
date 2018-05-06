const { Future, encaseP } = require('fluture')
const md5 = require('md5')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { checkUserNotExsit, createUser, getUser } = require('./general')

exports.register = (req, res) => {
  let params = req.body

  if (params.password && params.password !== '') {
    params.password = md5(params.password)
  }

  const requiredParams = ['email', 'password', 'name', 'phoneNumber', 'gender', 'vendorId']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getUser))
      .chain(user => checkUserNotExsit(params, user))
      .chain(encaseP(createUser))
      .fork(
          error => responseError(res, error),
          data => responseDataHelper(res, data)
      )
  }
}
