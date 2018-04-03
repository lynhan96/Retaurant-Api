const { foods } = require('../../functions/admin/foods/foods')
const { updateFood } = require('../../functions/admin/foods/updateFood')
const { createFood } = require('../../functions/admin/foods/createFood')
const { deleteFood } = require('../../functions/admin/foods/deleteFood')

module.exports = app => {
  app.route('/v1/foods').post(foods)
  app.route('/v1/updateFood').post(updateFood)
  app.route('/v1/createFood').post(createFood)
  app.route('/v1/deleteFood').post(deleteFood)
}
