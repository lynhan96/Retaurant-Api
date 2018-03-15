const { Future, encaseP } = require('fluture')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getEmployees } = require('./general')

exports.employees = (req, res) => {
  const params = req.body

  Future.of(params)
    .chain(encaseP(getEmployees))
    .fork(
      error => responseError(res, error),
      data => responseDataHelper(res, data)
    )
}
