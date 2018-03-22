const { Future, encaseP } = require('fluture')
const md5 = require('md5')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getEmployee, updateEmployee, checkEmployeeExsit } = require('./general')

exports.updateEmployee = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = headers['vid']

  if (params.password && params.password !== '') {
    params.password = md5(params.password)
  }

  const requiredParams = ['employeeId']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getEmployee))
      .chain(checkEmployeeExsit)
      .chain(encaseP(employee => updateEmployee(employee, params)))
      .fork(
        error => responseError(res, error),
        _ => responseDataHelper(res, {})
      )
  }
}
