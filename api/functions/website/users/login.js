const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')

const { getUser, checkUserExsit, checkPassword } = require('./general')

exports.loginUser = (req, res) => {
  const params = req.body
  const requiredParams = ['email', 'password']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getUser))
      .chain(checkUserExsit)
      .chain(user => checkPassword(user, params))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, data)
      )
  }
}