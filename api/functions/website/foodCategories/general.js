const FoodCategory = require('../../../../models/foodCategory')

const foodCategoryAttrs = [
  'id',
  'name',
  'description',
  'isView',
  'imageUrl'
]

exports.getfoodCategories = params => FoodCategory.findAll({
  where: {
    vendorId: params.vendorId
  },
  attributes: foodCategoryAttrs,
  order: [[params.sortBy, params.sortDir]]
})
