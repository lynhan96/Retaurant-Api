const { Future, encaseP } = require('fluture')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getDashboardInfo } = require('./general')

exports.dashboard = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = headers['vid']

  Future.of(params)
    .chain(encaseP(getDashboardInfo))
    .fork(
      errorCode => responseError(res, errorCode),
      data => responseDataHelper(res, { 'dashboardInfo': data })
    )
}
