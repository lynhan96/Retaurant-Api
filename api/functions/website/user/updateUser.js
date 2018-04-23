const { Future, encaseP } = require('fluture')
const md5 = require('md5')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getUser, updateUser, checkUserExsit } = require('./general')

exports.updateUser = (req, res) => {
  let params = req.body

  if (params.password && params.password !== '') {
    params.password = md5(params.password)
  }

  const requiredParams = ['userId']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getUser))
      .chain(checkUserExsit)
      .chain(encaseP(user => updateUser(user, params)))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, data)
      )
  }
}
