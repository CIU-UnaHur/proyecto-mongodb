const { Router } = require('express')
const libroControllers = require('../controllers/libro.controllers')
const route = Router()

route.get('/', libroControllers.getAllLibros)
route.post('/', libroControllers.addLibro)

module.exports = route