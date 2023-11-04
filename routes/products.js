const express = require('express')
const route = express.Router()
const Controller = require('../controller/productController')

route.get('/', Controller.getAllProduct)

module.exports = route