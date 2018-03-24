const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getFoodCategories, getFoodCategorysByKeyWord, getFoodCategorysLimit } = require('./general')

const dataHandler = (res, allFoodCategory, defaultSearchParams) => {
  const { keyword } = defaultSearchParams

  if (keyword && keyword !== '') {
    Future.of(defaultSearchParams)
      .chain(encaseP(getFoodCategorysByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allFoodCategory.length / defaultSearchParams.limit, items: data })
      )
  } else {
    Future.of(defaultSearchParams)
      .chain(encaseP(getFoodCategorysLimit))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allFoodCategory.length / defaultSearchParams.limit, items: data })
      )
  }
}

exports.foodCategories = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = headers['vid']

  let defaultSearchParams = {
    sortBy: 'id',
    sortDir: 'asc',
    offset: 0,
    limit: 50
  }

  defaultSearchParams = R.merge(defaultSearchParams)(params)

  Future.of(defaultSearchParams)
    .chain(encaseP(getFoodCategories))
    .fork(
      error => responseError(res, error),
      data => dataHandler(res, data, defaultSearchParams)
    )
}
