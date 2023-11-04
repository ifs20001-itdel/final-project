const express = require('express')
const route = express.Router()
const Controller = require('../controller/versionController')

route.get('/', Controller.getAllVersion)

module.exports = route