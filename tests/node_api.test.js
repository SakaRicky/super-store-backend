const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const config = require('../utils/config')
const test_helper = require('./test_helper')

const api = supertest(app)

const Item = require('../models/item');
const { notify } = require('../app');

// This block is executed before running each test so that the database should 
// the exact same number of elements and should be in the same state before each test
beforeEach(async () => {
  // Empty the database
  await Item.deleteMany({})
  // Insert the initial items in the database
  await Item.insertMany(test_helper.initialItems)

})

describe('When there is initially some', () => {

    test('should return items as JSON', async () => {
        await api
        .get('/item/list')
        .query({ params:{
                from: 1,
                size: 6
        }})
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    })

    test('should return all items', async () => {
        // Number of items asked from the backend
        const size = 6
        const response = await api.get('/item/list').query({ params: {from: 1, size: size}})
        expect(response.body.items).toHaveLength(size)
    })

    test('should return 6 items', async () => {
        // Number of items asked from the backend
        const size = 6
        const response = await api.get('/item/list').query({params: {from: 1, size: 6}})
        console.log('response.body.items', response.body.items);
        expect(response.body.items).toHaveLength(size)
            
    })    

})

describe('Working with a specific item', () => {

    test('should add a valid item in the database', async () => {
        const item = {
            name: "Item name added for test",
            description: "This item is to be added successfully to the database",
            avgRating: 3,
            imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
            isOnSale: "yes",
            price: 1200,
            stockCount: 13
        }
    
        await api.post('/item').send(item).expect(200)
    
        const itemsInDb = await test_helper.itemsInDB()
        expect(itemsInDb).toHaveLength(test_helper.initialItems.length + 1)
    
        expect(itemsInDb).toContain("Item name added for test")
    
    })
    
    test('should have a specific item', async () => {
        const response = await api.get('/item/list').query({ params:{from: 1, size:6}})
    
        const items_names = response.body.items.map(item => item.name)
    
        expect(items_names).toContain(test_helper.initialItems[0].name)
    })

    test('should not save item without name', async () => {
        const item = {
            description: "This item shouldn't be saved due to lack of name",
            avgRating: 3,
            imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
            isOnSale: "yes",
            price: 1200,
            stockCount: 13
        }
    
        await api.post('/item').send(item).expect(400)
    
        const itemsInDb = await test_helper.itemsInDB()
    
        expect(itemsInDb).toHaveLength(test_helper.initialItems.length)
    })
    
    test('fails with statuscode 400 id is invalid', async () => {
        const invalidId = '5a3d5da59070081a82a3445'
    
        await api
          .get(`/item/${invalidId}`)
          .expect(400)
      })
})

describe('Deletion of an item', () => {
    
    test('should delete item', async () => {
        const itemsInDb = await test_helper.itemsInDB()

        const itemsFromApi = await (await api.get('/item/list').query({params:{from: 1, size: 6}})).body.items
        const itemToDelete = itemsFromApi[0]
        const id = itemToDelete.id

        await api.delete(`/item/${id}`).expect(204)

        const remainingItemsInDb = await test_helper.itemsInDB()

        expect(remainingItemsInDb).not.toContain(itemToDelete.name)
    })


    
})



afterAll(() => {
    mongoose.connection.close()
})