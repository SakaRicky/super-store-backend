const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

// Used to login the user
// needs user email, password
// return auth token 
loginRouter.post('/', async (req, res) => {
    const body = req.body
    const user = await User.findOne({email: body.email})
    // check if a user was found, if no passwordCorrect will be false
    //if yes, verify if the password match with the hashed password
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash)
    
    // If there is no user and no password, auth fail and return message to indicate that
    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: "invalid username or password"
        })
    }
    console.log('admin user? ', user);

    // The token will be created using the id and username
    // They will be useful later when a request comes with a token and the server needs confirm the person
    const tokenForUser = {
        username: user.username,
        id: user._id,
        role: user.role
    }

    // Generate the token using the id and username
    const token = jwt.sign(tokenForUser, process.env.SECRET)

    return res
        .status(200)
        .send({token, username: user.username, name: user.name, role: user.role})
})

module.exports = loginRouter