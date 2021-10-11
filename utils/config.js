// const { config } = require('dotenv')

require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.MONGOURL_TEST
    : process.env.MONGODB_URI

console.log('MONGODB_URI', MONGODB_URI);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.NODE_ENV', process.env.SECRET);
console.log('process.env.NODE_ENV', process.env.PORT);

module.exports = {
    MONGODB_URI,
    PORT
}