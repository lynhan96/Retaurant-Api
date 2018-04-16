const { reject, of } = require('fluture')
const R = require('ramda')

const Contact = require('../../../../models/contact')
const { Op } = require('../../../../models/sequelize')

exports.createContact = params => Contact.create(params)
