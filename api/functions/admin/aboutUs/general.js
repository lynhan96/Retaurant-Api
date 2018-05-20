const { of, reject } = require('fluture')

const AboutUs = require('../../../../models/aboutUs')

exports.getAbout = params => AboutUs.findAll({
  where: {
    vendorId: params.vendorId
  }
})

exports.getAboutUs = params => AboutUs.findOne({
  where: { id: params.aboutUsId, vendorId: params.vendorId }
})

exports.updateAboutUs = (aboutUs, params) => aboutUs.update(params)

exports.checkContentExist = content => content ? of(content) : reject(422)
