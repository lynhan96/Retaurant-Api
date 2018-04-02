const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../helpers/checkParamsHelper')
const { responseError } = require('../../helpers/responseErrorHelper')
const responseDataHelper = require('../../helpers/responseDataHelper')

const { getProfile, checkProfileExist, checkPassword } = require('./general')

exports.login = (req, res) => {
  const params = req.body
  const requiredParams = ['email', 'password']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getProfile))
      .chain(checkProfileExist)
      .chain(profile => checkPassword(profile, params))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { uid: data.id, name: data.name, token: data.token })
      )
  }
}
