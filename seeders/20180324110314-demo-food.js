'use strict'
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('foods', [{
      name: 'Lẫu Thái',
      description: 'Lẫu Thái đặc trưng. Mang đến hương vị đặc sắc cho bữa ăn của bạn',
      vendorId: 1,
      currentPrice: 230000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Đồ nướng Hải sản',
      description: 'Với hương vị biển đặc trưng kết hợp cùng món nướng. Đồ nướng Hải sản sẽ mang đến sự hấp dẫn khó phai.',
      vendorId: 1,
      currentPrice: 280000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Món Chay',
      description: 'Món chay mang đến một bữa ăn ngon cùng lượng calo tối thiểu cho bạn.',
      vendorId: 1,
      currentPrice: 89000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Lẫu Thái',
      description: 'Lẫu Thái đặc trưng. Mang đến hương vị đặc sắc cho bữa ăn của bạn',
      vendorId: 2,
      currentPrice: 230000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Đồ nướng Hải sản',
      description: 'Với hương vị biển đặc trưng kết hợp cùng món nướng. Đồ nướng Hải sản sẽ mang đến sự hấp dẫn khó phai.',
      vendorId: 2,
      currentPrice: 280000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Món Chay',
      description: 'Món chay mang đến một bữa ăn ngon cùng lượng calo tối thiểu cho bạn.',
      vendorId: 2,
      currentPrice: 89000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Lẫu Thái',
      description: 'Lẫu Thái đặc trưng. Mang đến hương vị đặc sắc cho bữa ăn của bạn',
      vendorId: 3,
      currentPrice: 230000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Đồ nướng Hải sản',
      description: 'Với hương vị biển đặc trưng kết hợp cùng món nướng. Đồ nướng Hải sản sẽ mang đến sự hấp dẫn khó phai.',
      vendorId: 3,
      currentPrice: 280000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    },
    {
      name: 'Món Chay',
      description: 'Món chay mang đến một bữa ăn ngon cùng lượng calo tối thiểu cho bạn.',
      vendorId: 3,
      currentPrice: 89000,
      isView: true,
      createdAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      startDate: moment.utc().format('YYYY-MM-DD hh:mm:ss'),
      endDate: moment.utc().add(30, 'days').format('YYYY-MM-DD hh:mm:ss')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
  }
}
