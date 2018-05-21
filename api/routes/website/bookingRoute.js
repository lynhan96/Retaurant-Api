const { bookingTable } = require('../../functions/website/booking/bookingTable')

module.exports = app => {
  app.route('/website/v1/bookingTable').post(bookingTable)
}
