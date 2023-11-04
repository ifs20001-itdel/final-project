const express = require('express')
const route = express.Router()
const Controller = require('../controller/supervisorController')

route.get('/', Controller.getAllSupervisor)

module.exports = route