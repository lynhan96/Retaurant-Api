const { of, reject } = require('fluture')

const AboutUs = require('../../../../models/aboutUs')

exports.getAbout = params => AboutUs.findAll({
  where: {
    vendorId: params.vendorId
  }
})

exports.checkContentExist = content => content ? of(content) : reject(422)
