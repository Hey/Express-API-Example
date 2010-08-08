// Import & use router from express.
const { Router } = require('express')
const route = Router()

// Get the controller for this endpoint.
const API = require('../controllers/API.js')

// Endpoint defining.
route.get('/', API.index)


module.exports = route;
