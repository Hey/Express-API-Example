// Import & use router from express.
const { Router } = require('express')
const route = Router()

// Endpoint defining.
route.use('/', require('./Front'))
route.use('/api', require('./API'))


module.exports = route