const { foodCategories } = require('../../functions/admin/foodCategories/foodCategories')
const { updateFoodCategory } = require('../../functions/admin/foodCategories/updateFoodCategory')
const { createFoodCategory } = require('../../functions/admin/foodCategories/createFoodCategory')
const { deleteFoodCategory } = require('../../functions/admin/foodCategories/deleteFoodCategory')

module.exports = app => {
  app.route('/v1/foodCategories').post(foodCategories)
  app.route('/v1/updateFoodCategory').post(updateFoodCategory)
  app.route('/v1/createFoodCategory').post(createFoodCategory)
  app.route('/v1/deleteFoodCategory').post(deleteFoodCategory)
}
