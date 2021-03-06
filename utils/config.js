// const { config } = require('dotenv')

require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.MONGOURL_TEST
    : process.env.MONGODB_URI

// console.log('MONGOURL', MONGOURL);

module.exports = {
    MONGODB_URI,
    PORT
}