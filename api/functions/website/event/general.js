const { reject, of } = require('fluture')
const R = require('ramda')

const Event = require('../../../../models/event')
const { Op } = require('../../../../models/sequelize')

const eventAttrs = [
  'id',
  'name',
  'description',
  'sortDescription',
  'imageUrl',
  'updatedAt'
]

exports.getEvents = params => Event.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: eventAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getEventsLimit = params => Event.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: eventAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getEventsByKeyWord = params => Event.findAll({
  where: {
    vendorId: params.vendorId,
    [Op.or]: [
      {name: { [Op.iLike]: '%' + R.toLower(params.keyword) + '%' }}
    ]
  },
  attributes: eventAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getEvent = params => Event.findOne({
  where: { id: params.eventId, vendorId: params.vendorId }
})

exports.checkEventExsit = event => event ? of(event) : reject(417)