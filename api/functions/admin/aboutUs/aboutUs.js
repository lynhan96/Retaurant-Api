const { Future, encaseP } = require('fluture')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getAbout, checkContentExist } = require('./general')

exports.aboutUs = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = headers['vid']

  Future.of(params)
    .chain(encaseP(getAbout))
    .chain(checkContentExist)
    .fork(
      errorCode => responseError(res, errorCode),
      data => responseDataHelper(res, {items: data})
    )
}
