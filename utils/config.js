// const { config } = require('dotenv')

require('dotenv').config()

let MONGOURL = process.env.MONGODB_URI

const PORT = process.env.PORT

if (process.env.NODE_ENV === 'test') {
    MONGOURL = process.env.MONGOURL_TEST
}

module.exports = {
    MONGOURL,
    PORT
}