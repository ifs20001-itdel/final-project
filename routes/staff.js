const express = require('express')
const route = express.Router()
const Controller = require('../controller/staffController ')

route.get('/', Controller.getAllStaff)

module.exports = route