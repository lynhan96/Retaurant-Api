const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getfoodCategories } = require('./general')

exports.foodCategories = (req, res) => {
  let params = req.query

  let defaultSearchParams = {
    sortBy: 'id',
    sortDir: 'asc',
    offset: params['offset'] || 0,
    limit: params['limit'] || 50
  }

  defaultSearchParams = R.merge(defaultSearchParams)(params)
  Future.of(defaultSearchParams)
    .chain(encaseP(getfoodCategories))
    .fork(
      error => responseError(res, error),
      data => responseDataHelper(res, { totalPage: data.length / defaultSearchParams.limit, items: data })
    )
}
