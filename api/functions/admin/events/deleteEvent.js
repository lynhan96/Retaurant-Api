const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getEvent, deleteEvent, checkEventExsit } = require('./general')

exports.deleteEvent = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = headers['vid']

  const requiredParams = ['eventId']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getEvent))
      .chain(checkEventExsit)
      .chain(encaseP(deleteEvent))
      .fork(
        error => responseError(res, error),
        _ => responseDataHelper(res, {})
      )
  }
}
