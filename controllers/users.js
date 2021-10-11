const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

// Get the list of all the users in the backend
userRouter.get('/', async (req, res) => {
    const allUsers = await User.find({})
    res.json(allUsers)
})

// Save new user to backend
// another comment
userRouter.post('/', async (req, res) => {
    const body = req.body
    const saltRounds = 10
    // Use to encrypt the password before saving
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        name: body.name,
        username: body.username,
        email: body.email,
        passwordHash
    })
console.log("saved user", user);
    const savedUser = await user.save()

    res.status(201).json(savedUser)
})

module.exports = userRouter