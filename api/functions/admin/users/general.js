const { reject, of } = require('fluture')
const md5 = require('md5')
const User = require('../../../../models/user')
const { Op } = require('../../../../models/sequelize')

exports.checkUserExist = user => user ? of(user) : reject(414)

exports.checkPassword = (profile, params) => profile.password === md5(params.password) ? of(profile) : reject(416)

const userAttrs = [
  'id',
  'name',
  'email',
  'phoneNumber',
  'position',
  'birthday',
  'gender',
  'createdAt',
  'updatedAt'
]

exports.getUsers = params => User.findAll({
  where: {
    position: {
      [Op.ne]: 'administrator'
    }
  },
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getUsersLimit = params => User.findAll({
  where: {
    position: {
      [Op.ne]: 'administrator'
    }
  },
  attributes: userAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getUsersByKeyWord = params => User.findAll({
  where: {
    position: {
      [Op.ne]: 'administrator'
    },
    [Op.or]: [
      {name: { [Op.iLike]: '%' + params.keyword + '%' }},
      {position: { [Op.iLike]: '%' + params.keyword + '%' }}
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

exports.checkUserExsit = user => user ? of(user) : reject(417)

exports.updateUser = (user, params) => user.update(params)

exports.createUser = params => User.create(params)

exports.deleteUser = user => user.destroy()
