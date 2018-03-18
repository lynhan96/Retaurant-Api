const { Future, encaseP } = require('fluture')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getEmployees, getEmployeesByKeyWord } = require('./general')

exports.employees = (req, res) => {
  const params = req.body
  const { keyword } = params

  if (keyword && keyword !== '') {
    Future.of(params)
      .chain(encaseP(getEmployeesByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, data)
      )
  } else {
    Future.of(params)
      .chain(encaseP(getEmployees))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, data)
      )
  }
}
