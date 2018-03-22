const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getEmployees, getEmployeesByKeyWord, getEmployeesLimit } = require('./general')

const dataHandler = (res, allEmployee, defaultSearchParams) => {
  const { keyword } = defaultSearchParams

  if (keyword && keyword !== '') {
    Future.of(defaultSearchParams)
      .chain(encaseP(getEmployeesByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allEmployee.length / defaultSearchParams.limit, items: data })
      )
  } else {
    Future.of(defaultSearchParams)
      .chain(encaseP(getEmployeesLimit))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allEmployee.length / defaultSearchParams.limit, items: data })
      )
  }
}

exports.employees = (req, res) => {
  const params = req.body

  let defaultSearchParams = {
    sortBy: 'id',
    sortDir: 'asc',
    offset: 0,
    limit: 50
  }

  defaultSearchParams = R.merge(defaultSearchParams)(params)

  Future.of(defaultSearchParams)
    .chain(encaseP(getEmployees))
    .fork(
      error => responseError(res, error),
      data => dataHandler(res, data, defaultSearchParams)
    )
}
