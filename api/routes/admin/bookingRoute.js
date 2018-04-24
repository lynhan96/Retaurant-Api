const { bookings } = require('../../functions/admin/bookings/bookings')
const { updateBooking } = require('../../functions/admin/bookings/updateBooking')
const { createBooking } = require('../../functions/admin/bookings/createBooking')
const { deleteBooking } = require('../../functions/admin/bookings/deleteBooking')

module.exports = app => {
  app.route('/v1/bookings').post(bookings)
  app.route('/v1/updateBooking').post(updateBooking)
  app.route('/v1/createBooking').post(createBooking)
  app.route('/v1/deleteBooking').post(deleteBooking)
}
