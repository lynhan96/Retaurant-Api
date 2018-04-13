const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getEvents, getEventsByKeyWord, getEventsLimit } = require('./general')

const dataHandler = (res, allEvent, defaultSearchParams) => {
  const { keyword } = defaultSearchParams

  if (keyword && keyword !== '') {
    Future.of(defaultSearchParams)
      .chain(encaseP(getEventsByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allEvent.length / defaultSearchParams.limit, items: data })
      )
  } else {
    Future.of(defaultSearchParams)
      .chain(encaseP(getEventsLimit))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allEvent.length / defaultSearchParams.limit, items: data })
      )
  }
}

exports.events = (req, res) => {
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
    .chain(encaseP(getEvents))
    .fork(
      error => responseError(res, error),
      data => dataHandler(res, data, defaultSearchParams)
    )
}
