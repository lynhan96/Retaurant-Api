const Vendor = require('../../../../models/vendors')

exports.getVendorDomains = params => Vendor.findAll({
  attributes: ['restaurantDomainName']
})
