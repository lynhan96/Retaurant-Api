const { reject, of } = require('fluture')
const R = require('ramda')

const Food = require('../../../../models/food')
const FoodCategory = require('../../../../models/foodCategory')
const { Op } = require('../../../../models/sequelize')

const foodCategoryAttrs = [
  'id',
  'name',
  'description',
  'isView',
  'imageUrl'
]

const foodAttrs = [
  'id',
  'foodCategoryId',
  'name',
  'oldPrice',
  'currentPrice',
  'status',
  'description',
  'imageUrl'
]

const foodCategoryModel = {
  model: FoodCategory,
  as: 'foodCategory',
  attributes: foodCategoryAttrs
}

exports.getFoods = params => Food.findAll({
  include: [foodCategoryModel],
  where: {
    vendorId: params.vendorId
  },
  attributes: foodAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getFoodsLimit = params => Food.findAll({
  include: [foodCategoryModel],
  where: {
    vendorId: params.vendorId
  },
  attributes: foodAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getFoodsByKeyWord = params => Food.findAll({
  include: [foodCategoryModel],
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
  include: [foodCategoryModel],
  where: { id: params.foodId, vendorId: params.vendorId }
})

exports.checkFoodExsit = food => food ? of(food) : reject(417)
