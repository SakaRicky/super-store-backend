const http = require('http')
const mongoose = require('mongoose')

const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)
const PORT = config.PORT

logger.info('connecting to', config.MONGOURL)

mongoose.connect(config.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})