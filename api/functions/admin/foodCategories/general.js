const { reject, of } = require('fluture')
const R = require('ramda')

const FoodCategory = require('../../../../models/foodCategory')
const { Op } = require('../../../../models/sequelize')

const foodCategoryAttrs = [
  'id',
  'name',
  'description',
  'isView',
  'imageUrl',
  'createdAt',
  'updatedAt'
]

exports.getFoodCategories = params => FoodCategory.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: foodCategoryAttrs,
  order: [[params.sortBy, params.sortDir]]
})

exports.getFoodCategorysLimit = params => FoodCategory.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: foodCategoryAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getFoodCategorysByKeyWord = params => FoodCategory.findAll({
  where: {
    vendorId: params.vendorId,
    [Op.or]: [
      {name: { [Op.iLike]: '%' + R.toLower(params.keyword) + '%' }}
    ]
  },
  attributes: foodCategoryAttrs,
  order: [[params.sortBy, params.sortDir]],
  offset: parseInt(params.limit) * parseInt(params.offset),
  limit: parseInt(params.limit)
})

exports.getFoodCategory = params => FoodCategory.findOne({
  where: { id: params.foodCategoryId, vendorId: params.vendorId }
})

exports.checkFoodCategoryExsit = foodCategory => foodCategory ? of(foodCategory) : reject(417)

exports.updateFoodCategory = (foodCategory, params) => foodCategory.update(params)

exports.createFoodCategory = params => FoodCategory.create(params)

exports.deleteFoodCategory = foodCategory => foodCategory.destroy()
