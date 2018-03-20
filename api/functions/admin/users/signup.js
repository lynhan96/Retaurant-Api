const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { signup } = require('./general')

exports.singup = (req, res) => {
  const params = req.body
  const requiredParams = ['name', 'position', 'phoneNumber', 'gender']
  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
        .chain(encaseP(signup))
        .fork(
            error => responseError(res, error),
            _ => responseDataHelper(res, {})
        )
  }
}
