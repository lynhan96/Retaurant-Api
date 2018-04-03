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
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getUsersLimit = params => User.findAll({
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getUsersByKeyWord = params => User.findAll({
  where: {
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
  where: { id: params.userId }
})

exports.getUserByEmail = params => User.findOne({
  where: { email: params.email }
})

exports.checkUserExsit = user => user ? of(user) : reject(417)

exports.checkUserEmailExsit = user => user ? of(user) : reject(418)

exports.updateUser = (user, params) => user.update(params)

exports.createUser = params => User.create(params)

exports.deleteUser = user => user.destroy()
