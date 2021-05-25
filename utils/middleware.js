const { request, response } = require('express')
const logger = require('./logger')

const requestLogger = (request, response, next) => {
    logger.info('Method', request.method)
    logger.info('Path', request.path)
    logger.info('body', request.body)
    next()
}

const unknownEndpoint = (request, response, next) => {
    response.send('<h2>This endpoint is unkown</h2>')
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }

const middleware = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}

module.exports = middleware