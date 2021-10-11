// const { config } = require('dotenv')

require('dotenv').config()

const PORT = process.env.PORT

// const MONGODB_URI = process.env.NODE_ENV === 'test'
//     ? process.env.MONGOURL_TEST
//     : process.env.MONGODB_URI

const MONGODB_URI = `mongodb+srv://rickysaka:jw76102907@cluster0.u3l97.mongodb.net/super-store?retryWrites=true&w=majority`

module.exports = {
    MONGODB_URI,
    PORT
}