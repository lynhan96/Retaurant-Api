const { reject, of } = require('fluture')
const R = require('ramda')

const Contact = require('../../../../models/contact')
const { Op } = require('../../../../models/sequelize')

const contactAttrs = [
  'id',
  'name',
  'phoneNumber',
  'email',
  'address',
  'message',
  'viewed',
  'createdAt',
  'updatedAt'
]

exports.getContacts = params => Contact.findAll({
  attributes: contactAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getContactsByKeyWord = params => Contact.findAll({
  where: {
    [Op.or]: [
      {name: { [Op.iLike]: '%' + R.toLower(params.keyword) + '%' }}
    ],
    [Op.or]: [
      {email: { [Op.iLike]: '%' + R.toLower(params.keyword) + '%' }}
    ]
  },
  attributes: contactAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getContact = params => Contact.findOne({
  where: { id: params.id }
})

exports.checkContactExsit = contact => contact ? of(contact) : reject(417)

exports.updateContact = (contact, params) => contact.update(params)

exports.createContact = params => Contact.create(params)

exports.deleteContact = contact => contact.destroy()
