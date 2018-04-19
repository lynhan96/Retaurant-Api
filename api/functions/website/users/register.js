const { Future, encaseP } = require('fluture')
const md5 = require('md5')

const { paramsExistedOrEmpty } = require('../../../helpers/checkParamsHelper')
const { responseError } = require('../../../helpers/responseErrorHelper')
const responseDataHelper = require('../../../helpers/responseDataHelper')
const { checkUserNotExsit, register } = require('./general')

exports.registerUser = (req, res) => {
    let params = req.body
    if (params.password && params.password !== '') {
        params.password = md5(params.password)
    }

    if (paramsExistedOrEmpty(res, params, ["email", "password"], ["email", "password"])) {
        Future.of(params)
            .chain(encaseP(checkUserNotExsit))
            .chain(encaseP(user =>register(params)))
            .fork(
                error => responseError(res, error),
                _ => responseDataHelper(res, {})
            )
    }
}