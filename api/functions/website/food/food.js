const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getFoods, getFoodsByKeyWord, getFoodsLimit } = require('./general')

const dataHandler = (res, allFoodCategory, defaultSearchParams) => {
  const { keyword } = defaultSearchParams
  if (keyword && keyword !== '') {
    Future.of(defaultSearchParams)
      .chain(encaseP(getFoodsByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allFoodCategory.length / defaultSearchParams.limit, items: data })
      )
  } else {
    Future.of(defaultSearchParams)
      .chain(encaseP(getFoodsLimit))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allFoodCategory.length / defaultSearchParams.limit, items: data })
      )
  }
}

exports.foods = (req, res) => {
  let params = req.query

  let defaultSearchParams = {
    sortBy: 'id',
    sortDir: 'asc',
    offset: params['offset'] || 0,
    limit: params['limit'] || 50
  }

  defaultSearchParams = R.merge(defaultSearchParams)(params)
  Future.of(defaultSearchParams)
    .chain(encaseP(getFoods))
    .fork(
      error => responseError(res, error),
      data => dataHandler(res, data, defaultSearchParams)
    )
}