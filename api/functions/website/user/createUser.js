const { Future, encaseP } = require('fluture')
const md5 = require('md5')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { createUser } = require('./general')
const { generateToken } = require('../general')

exports.createUser = (req, res) => {
  let params = req.body

  params['token'] = generateToken()

  if (params.password && params.password !== '') {
    params.password = md5(params.password)
  }

  const requiredParams = ['name', 'phoneNumber', 'password', 'email']

  if (paramsExistedOrEmpty(res, params, requiredParams, requiredParams)) {
    Future.of(params)
      .chain(encaseP(createUser))
      .fork(
        error => responseError(res, error),
        data => responseDataHelper(res, { uid: data.id, name: data.name, token: data.token })
      )
  }
}
