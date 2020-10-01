// Import & use router from express.
const { Router } = require('express')
const route = Router()

// Endpoint defining.
route.use('/', require('./front'))
route.use('/api', require('./api'))

module.exports = route
