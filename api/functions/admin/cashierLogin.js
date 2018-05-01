const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../helpers/checkParamsHelper')
const { responseError } = require('../../helpers/responseErrorHelper')
const responseDataHelper = require('../../helpers/responseDataHelper')

const { getProfile, checkCashierProfileExist, checkPassword } = require('./general')

exports.cashierLogin = (req, res) => {
  const params = req.body
  const requiredParams = ['email', 'password']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getProfile))
      .chain(checkCashierProfileExist)
      .chain(profile => checkPassword(profile, params))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { position: data.position, uid: data.id, name: data.name, vid: data.vendorId, token: data.token })
      )
  }
}
