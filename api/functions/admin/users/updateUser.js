const { Future, encaseP } = require('fluture')
const md5 = require('md5')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getUser, updateUser, checkUserExsit, getUserByEmail, checkUserEmailExsit } = require('./general')

exports.updateUser = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = headers['vid']

  if (params.password && params.password !== '') {
    params.password = md5(params.password)
  }

  const requiredParams = ['userId']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getUserByEmail))
      .chain(checkUserEmailExsit)
      .chain(encaseP(_ => getUser(params)))
      .chain(checkUserExsit)
      .chain(encaseP(User => updateUser(User, params)))
      .fork(
        error => responseError(res, error),
        _ => responseDataHelper(res, {})
      )
  }
}
