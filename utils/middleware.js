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

const middleware = {
    requestLogger,
    unknownEndpoint
}

module.exports = middleware