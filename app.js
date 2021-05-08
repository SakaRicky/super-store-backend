const express = require('express')
const cors = require('cors')

const middleware = require('./utils/middleware')
const itemsRouter = require('./controllers/items')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/item', itemsRouter)

app.use(middleware.unknownEndpoint)

module.exports = app
