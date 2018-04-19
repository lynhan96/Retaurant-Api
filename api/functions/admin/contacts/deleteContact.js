const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getContact, deleteContact, checkContactExsit } = require('./general')

exports.deleteContact = (req, res) => {
  let params = req.body

  const requiredParams = ['id']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getContact))
      .chain(checkContactExsit)
      .chain(encaseP(deleteContact))
      .fork(
        error => responseError(res, error),
        _ => responseDataHelper(res, {})
      )
  }
}
