const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getBookings, getBookingsByKeyWord, getBookingsLimit } = require('./general')

const dataHandler = (res, allBooking, defaultSearchParams) => {
  const { keyword } = defaultSearchParams

  if (keyword && keyword !== '') {
    Future.of(defaultSearchParams)
      .chain(encaseP(getBookingsByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allBooking.length / defaultSearchParams.limit, items: data })
      )
  } else {
    Future.of(defaultSearchParams)
      .chain(encaseP(getBookingsLimit))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: allBooking.length / defaultSearchParams.limit, items: data })
      )
  }
}

exports.bookings = (req, res) => {
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
    .chain(encaseP(getBookings))
    .fork(
      error => responseError(res, error),
      data => dataHandler(res, data, defaultSearchParams)
    )
}
