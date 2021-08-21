const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },
    username: { 
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String, 
        required: true
    },
    role: { 
        type: String,
        required: true,
    },
    cart: [{
        type: Object
    }]
})

userSchema.plugin(mongooseUniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // hide the password hash from the front end
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User