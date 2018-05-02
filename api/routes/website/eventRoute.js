const { events } = require('../../functions/website/event/event')

module.exports = app => {
  app.route('/website/v1/events').get(events)
}
