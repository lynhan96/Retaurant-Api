const { events } = require('../../functions/admin/events/events')
const { updateEvent } = require('../../functions/admin/events/updateEvent')
const { createEvent } = require('../../functions/admin/events/createEvent')
const { deleteEvent } = require('../../functions/admin/events/deleteEvent')

module.exports = app => {
  app.route('/v1/events').post(events)
  app.route('/v1/updateEvent').post(updateEvent)
  app.route('/v1/createEvent').post(createEvent)
  app.route('/v1/deleteEvent').post(deleteEvent)
}
