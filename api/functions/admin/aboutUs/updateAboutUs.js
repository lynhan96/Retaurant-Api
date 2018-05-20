const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getAboutUs, updateAboutUs, checkContentExist } = require('./general')

exports.updateAboutUs = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = headers['vid']

  const requiredParams = ['aboutUsId']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getAboutUs))
      .chain(checkContentExist)
      .chain(encaseP(aboutUs => updateAboutUs(aboutUs, params)))
      .fork(
        error => responseError(res, error),
        _ => responseDataHelper(res, {})
      )
  }
}
