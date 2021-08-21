const cartRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

// route for saving cart to backend. Only those logged in can save cart through this route
cartRouter.get('/', async (req, res) => {
    const token = req.token
    console.log('token', token);
    // Verify if the token, this will return the object used to sign this token
    const decodedToken = await jwt.verify(token, process.env.SECRET)
    const user = await User.findById(decodedToken.id)
    //
    const cart = user.cart
    // status code 204 shows resource have been updated
    res.status(200).send(cart)
})

// route for saving cart to backend. Only those logged in can save cart through this route
cartRouter.post('/', async (req, res) => {
    const cart = req.body
    const token = req.token
    // Verify if the token, this will return the object used to sign this token
    const decodedToken = await jwt.verify(token, process.env.SECRET)
    const user = await User.findById(decodedToken.id)
    // completely replace the old cart with the new one
    user.cart = cart
    await user.save()
    // status code 204 shows resource have been updated
    res.status(204).end()
})

module.exports = cartRouter