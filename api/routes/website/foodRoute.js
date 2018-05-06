const { foods } = require('../../functions/website/food/food')
const { foodCategories } = require('../../functions/website/foodCategories/foodCategories')

module.exports = app => {
  app.route('/website/v1/foods').get(foods)
  app.route('/website/v1/foodCategories').get(foodCategories)
}
