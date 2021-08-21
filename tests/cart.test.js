const mongoose = require('mongoose')
const User = require('../models/user')
const supertest = require('supertest')
const bcrypt = require("bcrypt")
const testHelper = require('./test_helper')

const app = require('../app')

const api = supertest(app)

let auth = null

describe('When there is initially one user in the db', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        const password = 'testpassword'
        const passwordHash = await bcrypt.hash(password, 10)
        const userObject = {
            name: 'test user',
            username: "test",
            email: "testuser@store.com",
            passwordHash
        }
        const user = new User(userObject)
        await user.save()
        const response = await api.post('/login').send({email: userObject.email, password: password})
        auth = response.body
    })

    test('should fail without token', async () => {
        const cart = [
            {
                name : "item's names",
                imgUrl : "imageurl.com",
                description : "description of the test item",
                price : 500,
                average_rating : 2.5,
                isOnSale : true,
                item_id : "6vsvvy7dwg27tsbjh"
            }
        ]
        const response = await api.post('/cart')
            .send(cart)
            .expect(401)
        // console.log(response);
    })

    test('should add cart to user in db', async () => {
        const cart = [
            {
                name : "item's names",
                imgUrl : "imageurl.com",
                description : "description of the test item",
                price : 500,
                average_rating : 2.5,
                isOnSale : true,
                item_id : "6vsvvy7dwg27tsbjh"
            }
        ]
        const response = await api.post('/cart')
            .send(cart)
            .set('authorization', 'bearer ' + auth.token)
            .expect(204)
        
        const userIndb = await User.findOne({email: "testuser@store.com"})

        expect(userIndb.cart).not.toBe(null)
        // expect(1).toBe(1)
    })
    
})

afterAll( async () => {
    mongoose.connection.close(true)
})