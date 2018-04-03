const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getUsers, getUsersByKeyWord, getUsersLimit } = require('./general')

const dataHandler = (res, allUser, defaultSearchParams) => {
  const { keyword } = defaultSearchParams

  if (keyword && keyword !== '') {
    Future.of(defaultSearchParams)
      .chain(encaseP(getUsersByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allUser.length / defaultSearchParams.limit, items: data })
      )
  } else {
    Future.of(defaultSearchParams)
      .chain(encaseP(getUsersLimit))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allUser.length / defaultSearchParams.limit, items: data })
      )
  }
}

exports.listUsers = (req, res) => {
  let params = req.body

  let defaultSearchParams = {
    sortBy: 'id',
    sortDir: 'asc',
    offset: 0,
    limit: 50
  }

  defaultSearchParams = R.merge(defaultSearchParams)(params)

  Future.of(defaultSearchParams)
    .chain(encaseP(getUsers))
    .fork(
      error => responseError(res, error),
      data => dataHandler(res, data, defaultSearchParams)
    )
}
