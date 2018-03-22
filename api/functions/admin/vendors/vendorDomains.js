const { Future, encaseP } = require('fluture')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getVendorDomains } = require('./general')

exports.vendorDomains = (req, res) => {
  Future.of(null)
    .chain(encaseP(getVendorDomains))
    .fork(
      error => responseError(res, error),
      data => responseDataHelper(res, data)
    )
}
