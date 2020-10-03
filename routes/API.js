// Import & use router from express.
const { Router } = require('express')
const route = Router()

// Get the controller for this endpoint.
const API = require('../controllers/api.js')

// Endpoint defining.
route.get('/', API.Index)

module.exports = route
