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
    
        const passwordHash = await bcrypt.hash('testpassword', 10)
    
        const user = new User({
            name: 'test user',
            username: "test",
            email: "testuser@store.com",
            passwordHash
        })
        await user.save()
    })


    test('should return a token', async () => {
        const usersInDb = await testHelper.usersInDb()
        const user = {
            email: "testuser@store.com",
            password: 'testpassword'
        }

        const response = await api.post('/login')
            .send(user)
            .expect(200)

        expect(response.body.token).not.toBe(null)
        expect(response.body.name).toBe('test user')
    })
    
})
