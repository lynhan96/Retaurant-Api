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
  'updatedAt',
  'isVip'
]

exports.getUsers = params => User.findAll({
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getUsersLimit = params => User.findAll({
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getUser = params => User.findOne({
  where: { id: params.userId }
})

exports.checkUserExsit = user => user ? of(user) : reject(417)

exports.updateUser = (user, params) => user.update(params)

exports.createUser = params => User.create(params)

exports.deleteUser = user => user.destroy()
