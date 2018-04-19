const { Future, encaseP } = require('fluture')
const R = require('ramda')

const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { getContacts, getContactsByKeyWord } = require('./general')

const dataHandler = (res, contactList, defaultSearchParams) => {
  const { keyword } = defaultSearchParams

  if (keyword && keyword !== '') {
    Future.of(defaultSearchParams)
      .chain(encaseP(getContactsByKeyWord))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { totalPage: contactList.length / defaultSearchParams.limit, items: data })
      )
  } else {
    responseDataHelper(res, { totalPage: contactList.length / defaultSearchParams.limit, items: contactList })
  }
}

exports.contacts = (req, res) => {
  let params = req.body

  let defaultSearchParams = {
    sortBy: 'id',
    sortDir: 'asc',
    offset: 0,
    limit: 50
  }

  defaultSearchParams = R.merge(defaultSearchParams)(params)

  Future.of(defaultSearchParams)
    .chain(encaseP(getContacts))
    .fork(
      error => responseError(res, error),
      data => dataHandler(res, data, defaultSearchParams)
    )
}
