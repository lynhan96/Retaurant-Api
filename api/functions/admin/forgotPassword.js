const { Future, encaseP } = require('fluture')
const randomString = require('randomstring')

const { paramsExistedOrEmpty } = require('../../helpers/checkParamsHelper')
const { sendForgotPasswordEmail } = require('../../helpers/mailerHelper')
const { responseError } = require('../../helpers/responseErrorHelper')
const responseDataHelper = require('../../helpers/responseDataHelper')

const { getProfile, checkProfileExist, updatePassword } = require('./general')

exports.forgotPassword = (req, res) => {
  const params = req.body
  const requiredParams = ['email']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    const newPassword = randomString.generate({ length: 5, charset: 'numeric' })

    Future.of(params)
      .chain(encaseP(getProfile))
      .chain(checkProfileExist)
      .chain(encaseP(profile => sendForgotPasswordEmail(profile, newPassword)))
      .chain(encaseP(_ => getProfile(params)))
      .chain(encaseP(profile => updatePassword(profile, newPassword)))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, {})
      )
  }
}
