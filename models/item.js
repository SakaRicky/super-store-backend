const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const itemSchema = mongoose.Schema({
    avgRating: {
        type: Number,
        minLength: 1,
        required: true
    },
    description: {
        type: String,
        minLength: 10,
        required: true
    },
    imageUrl: {
        type: String,
        minLength: 1,
    },
    isOnSale: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        minLength: 2,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stockCount: {
        type: Number,
        required: true
    }    
})

itemSchema.plugin(uniqueValidator)

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const itemModel = mongoose.model('Item', itemSchema)

module.exports = itemModel