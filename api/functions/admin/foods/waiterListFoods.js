const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getFoodsIsView } = require('./general')

exports.waiterListFoods = (req, res) => {
  let params = req.body
  const { headers } = req

  params['vendorId'] = headers['vid']

  let defaultParams = {
    sortBy: 'name',
    sortDir: 'asc'
  }

  defaultParams = R.merge(defaultParams)(params)

  Future.of(defaultParams)
    .chain(encaseP(getFoodsIsView))
    .fork(
      error => responseError(res, error),
      data => responseDataHelper(res, {items: data})
    )
}
