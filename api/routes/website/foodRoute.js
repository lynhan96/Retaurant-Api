const { foods } = require('../../functions/website/food/food')

module.exports = app => {
  app.route('/website/v1/foods').get(foods)
}
