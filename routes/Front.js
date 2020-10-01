// Import & use router from express.
const { Router } = require('express')
const route = Router()

// Get the controller for this endpoint.
const Front = require('../controllers/front.js')

// Endpoint defining.
route.get('/', Front.index)
route.get('/git', Front.git)

module.exports = route
