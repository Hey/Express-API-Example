// Import packages.
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

// Allow reading .env
require('dotenv').config()

// Import modules.
const middlewares = require('./middlewares')
const routes = require('./routes')

const app = express()

// Express: package middleware.
if (process.env.NODE_ENV != 'production') app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

// Route & middleware in good order.
app.use('/', routes)
app.use(middlewares.errorHandler)
app.use(middlewares.notFound)

// Run server.
app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening: http://localhost:${process.env.PORT || 8080}`)
})
