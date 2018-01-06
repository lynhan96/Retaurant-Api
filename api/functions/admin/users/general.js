const { reject, of } = require('fluture')
const randomString = require('randomstring')
const R = require('ramda')
const moment = require('moment')
const md5 = require('md5')
const uniqueString = require('unique-string')

exports.checkUserExist = user => user ? of(user) : reject(414)

exports.checkPassword = (profile, params) => profile.password === md5(params.password) ? of(profile) : reject(416)
