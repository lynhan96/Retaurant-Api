const { reject, of } = require('fluture')

const Booking = require('../../../../models/booking')

const bookingAttrs = [
  'id',
  'name',
  'phoneNumber',
  'vendorId',
  'note',
  'createdAt',
  'time',
  'status'
]

exports.getBookings = params => Booking.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: bookingAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getBookingsLimit = params => Booking.findAll({
  where: { vendorId: params.vendorId },
  attributes: bookingAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getBooking = params => Booking.findOne({
  where: { id: params.bookingId, vendorId: params.vendorId }
})

exports.checkBookingExsit = booking => booking ? of(booking) : reject(417)

exports.updateBooking = (booking, params) => booking.update(params)

exports.createBooking = params => Booking.create(params)

exports.deleteBooking = booking => booking.destroy()
