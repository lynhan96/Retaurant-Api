'use strict'
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('foods', [{
      name: 'Lẫu Thái',
      description: 'Lẫu Thái đặc trưng. Mang đến hương vị đặc sắc cho bữa ăn của bạn',
      vendorId: 1,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss'),
      // imageUrl: {
      //   'asdfasf': 'https://cdn.dealtoday.vn/img/s630x420/ac8fb51583e344efa06b12026ca42ae2.jpg?sign=3NmO-TY2m1q66IEDiGMx_A'
      // }
    },
    {
      name: 'Đồ nướng Hải sản',
      description: 'Với hương vị biển đặc trưng kết hợp cùng món nướng. Đồ nướng Hải sản sẽ mang đến sự hấp dẫn khó phai.',
      vendorId: 1,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss'),
      // imageUrl: {
      //   'asdfasf': 'https://pastaxi-manager.onepas.vn/content/uploads/articles/linhpt/do-nuong-hai-san/review-nuong-hai-san-vua-hai-san-bien-dong-3.jpg'
      // }
    },
    {
      name: 'Món Chay',
      description: 'Món chay mang đến một bữa ăn ngon cùng lượng calo tối thiểu cho bạn.',
      vendorId: 1,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss'),
      // imageUrl: {
      //   '1333113': 'http://niemdamme.com.vn/Uploads/files/thit-heo-quay-chay1(1).jpg'
      // }
    }], {})
  },

  down: (queryInterface, Sequelize) => {
  }
}
