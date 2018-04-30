const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getEvents, getEventsByKeyWord, getEventsLimit } = require('./general')

const dataHandler = (res, allEventCategory, defaultSearchParams) => {
  const { keyword } = defaultSearchParams
  if (keyword && keyword !== '') {
    Future.of(defaultSearchParams)
      .chain(encaseP(getEventsByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allEventCategory.length / defaultSearchParams.limit, items: data })
      )
  } else {
    Future.of(defaultSearchParams)
      .chain(encaseP(getEventsLimit))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allEventCategory.length / defaultSearchParams.limit, items: data })
      )
  }
}

exports.events = (req, res) => {
  let params = req.query
  let defaultSearchParams = {
    sortBy: 'id',
    sortDir: 'asc',
    offset: params['offset'] || 0,
    limit: params['limit'] || 50
  }

  defaultSearchParams = R.merge(defaultSearchParams)(params)
  Future.of(defaultSearchParams)
    .chain(encaseP(getEvents))
    .fork(
      error => responseError(res, error),
      data => dataHandler(res, data, defaultSearchParams)
    )
}
