const { reject, of } = require('fluture')
const R = require('ramda')

const Food = require('../../../../models/food')
const { Op } = require('../../../../models/sequelize')
const FoodCategory = require('../../../../models/foodCategory')

const foodCategoryAttrs = [
  'id',
  'name',
  'description',
  'isView',
  'imageUrl'
]

const foodAttrs = [
  'id',
  'name',
  'description',
  'oldPrice',
  'currentPrice',
  'foodCategoryId',
  'sortDescription',
  'status',
  'startDate',
  'endDate',
  'isView',
  'imageUrl',
  'createdAt',
  'updatedAt'
]

const foodCategoryModel = {
  model: FoodCategory,
  as: 'foodCategory',
  attributes: foodCategoryAttrs
}

exports.getFoodsIsView = params => Food.findAll({
  include: [foodCategoryModel],
  where: {
    vendorId: params.vendorId,
    isView: true
  },
  attributes: foodAttrs,
  order: [[params.sortBy, params.sortDir]]
})

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
  where: { id: params.foodId, vendorId: params.vendorId }
})

exports.checkFoodExsit = food => food ? of(food) : reject(417)

exports.updateFood = (food, params) => food.update(params)

exports.createFood = params => Food.create(params)

exports.deleteFood = food => food.destroy()
