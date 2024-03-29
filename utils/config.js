// const { config } = require('dotenv')
// Use heroku config:set to set these values

require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.MONGOURL_TEST
    : process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT
}