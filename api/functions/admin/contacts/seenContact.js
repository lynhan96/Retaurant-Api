const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getContact, updateContact, checkContactExsit } = require('./general')

exports.seenContact = (req, res) => {
  let params = req.body

  params.viewed = !params.viewed

  const requiredParams = ['id']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getContact))
      .chain(checkContactExsit)
      .chain(encaseP(contact => updateContact(contact, params)))
      .fork(
        error => responseError(res, error),
        _ => responseDataHelper(res, {})
      )
  }
}
