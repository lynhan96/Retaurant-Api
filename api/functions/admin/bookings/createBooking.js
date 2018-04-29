const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { createBooking } = require('./general')

exports.createBooking = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = parseInt(headers['vid'])
  params['status'] = 'Đang chờ'

  const requiredParams = ['phoneNumber', 'time']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(createBooking))
      .fork(
        error => {
          console.log(error)
          responseError(res, error)
        },
        _ => responseDataHelper(res, {})
      )
  }
}
