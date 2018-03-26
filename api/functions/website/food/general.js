const { reject, of } = require('fluture')
const R = require('ramda')

const Food = require('../../../../models/food')
const { Op } = require('../../../../models/sequelize')

const foodAttrs = [
  'foodCategoryId',
  'name',
  'oldPrice',
  'currentPrice',
  'status',
  'isView',
  'vendorId',
  'description',
  'imageUrl',
  'startDate',
  'endDate',
  'createdAt',
  'updatedAt'
]

exports.getFoods = params => Food.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: foodAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getFoodsLimit = params => Food.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: foodAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getFoodsByKeyWord = params => Food.findAll({
  where: {
    vendorId: params.vendorId,
    [Op.or]: [
      {name: { [Op.iLike]: '%' + R.toLower(params.keyword) + '%' }}
    ]
  },
  attributes: foodAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getFood = params => Food.findOne({
  where: { id: params.foodId, vendorId: params.vendorId }
})

exports.checkFoodExsit = food => food ? of(food) : reject(417)
