const mongoose = require('mongoose')
const User = require('../models/user')
const supertest = require('supertest')
const bcrypt = require("bcrypt")
const testHelper = require('./test_helper')

const app = require('../app')

const api = supertest(app)

describe('When there is initially one user in the db', () => {
    beforeEach(async () => {
        await User.deleteMany({})
    
        const passwordHash = await bcrypt.hash('root', 10)
    
        const user = new User({
            username: "root",
            email: "testuser@store.com",
            passwordHash
        })
        await user.save()
    })

    test('should create a user with a fresh username', async () => {
        
        const initialUsersInDb = await testHelper.usersInDb()
        const user = {
            username: "username1",
            email: "test@user.com",
            password: "newUser"
        }

        await api.post('/users').send(user).expect(201)
        const finalUsersInDb = await testHelper.usersInDb()

        expect(finalUsersInDb).toHaveLength(initialUsersInDb.length + 1)
        expect(finalUsersInDb).toContain(user.username)
    })

    test('should fail with proper status code and message if user already exists', async () => {
        const user = {
            username: "root",
            email: "test@user.com",
            password: "newUser"
        }
        const response = await api.post('/users').send(user).expect(400)
        expect(response.body.error).toContain('`username` to be unique.')
    })
})

afterAll( async done => {
    mongoose.connection.close()
    done()
})