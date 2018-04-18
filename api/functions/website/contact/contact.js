const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { createContact } = require('./general')

exports.createContact = (req, res) => {
  let params = req.body

  const requiredParams = ['name', 'phoneNumber', 'email', 'address', 'message']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(createContact))
      .fork(
        error => responseError(res, error),
        _ => responseDataHelper(res, {})
      )
  }
}
