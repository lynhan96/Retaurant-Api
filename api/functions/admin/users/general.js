const { reject, of } = require('fluture')
const R = require('ramda')

const User = require('../../../../models/user')
const { Op } = require('../../../../models/sequelize')

const userAttrs = [
  'id',
  'name',
  'email',
  'phoneNumber',
  'birthday',
  'gender',
  'createdAt',
  'updatedAt'
]

exports.getUsers = params => User.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getUsersLimit = params => User.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getUsersByKeyWord = params => User.findAll({
  where: {
    vendorId: params.vendorId,
    [Op.or]: [
      {name: { [Op.iLike]: '%' + R.toLower(params.keyword) + '%' }}
    ]
  },
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getUser = params => User.findOne({
  where: { id: params.userId, vendorId: params.vendorId }
})

exports.getUserByEmail = params => User.findOne({
  where: { email: params.email, vendorId: params.vendorId }
})

exports.checkUserExsit = user => user ? of(user) : reject(417)

exports.checkUserEmailExsit = user => user ? reject(418) : of(user)

exports.updateUser = (user, params) => user.update(params)

exports.createUser = params => User.create(params)

exports.deleteUser = user => user.destroy()
