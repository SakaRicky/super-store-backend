const express = require('express')
const cors = require('cors')
const path = require('path');
require('express-async-errors')
const middleware = require('./utils/middleware')
const itemsRouter = require('./controllers/items')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const cartRouter = require('./controllers/cart')

const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')

const app = express()

// // use this here for now for connecting to the database during testing
// mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
//   .then(() => {
//     logger.info('connected to MongoDB')
//   })
//   .catch((error) => {
//     logger.error('error connection to MongoDB:', error.message)
//   })

  // used for cross origin, i.e. so that request from other sources can be accepted
app.use(cors())
// use to serve static files
app.use(express.static('build'))

// used to make json data available from the request, a json parser
app.use(express.json())

// use for logging the request params
app.use(middleware.requestLogger)
// used to extract token from the req headers
app.use(middleware.tokenExtractor)

// routing
app.use('/item', itemsRouter)
app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/cart', cartRouter)

// staic contents like the images are routed here
app.use(express.static(path.join(__dirname, '/public')));

// if non of the routes match, unknown endpoints
app.use(middleware.unknownEndpoint)

// errors are caught here
app.use(middleware.errorHandler)

module.exports = app
