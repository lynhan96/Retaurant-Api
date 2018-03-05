const { reject, of } = require('fluture')
const md5 = require('md5')

exports.checkUserExist = user => user ? of(user) : reject(414)

exports.checkPassword = (profile, params) => profile.password === md5(params.password) ? of(profile) : reject(416)
