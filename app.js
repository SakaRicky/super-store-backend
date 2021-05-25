const express = require('express')
const cors = require('cors')
const path = require('path');
require('express-async-errors')
const middleware = require('./utils/middleware')
const itemsRouter = require('./controllers/items')

const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')

const app = express()

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)

app.use('/item', itemsRouter)

app.use(express.static(path.join(__dirname, '/public')));

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
