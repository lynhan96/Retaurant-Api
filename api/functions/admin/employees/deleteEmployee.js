const { Future, encaseP } = require('fluture')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getEmployee, deleteEmployee, checkEmployeeExsit } = require('./general')

exports.deleteEmployee = (req, res) => {
  const params = req.body
  const requiredParams = ['employeeId']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(getEmployee))
      .chain(checkEmployeeExsit)
      .chain(encaseP(deleteEmployee))
      .fork(
        error => responseError(res, error),
        _ => responseDataHelper(res, {})
      )
  }
}
