const Item = require('../models/item')
const User = require('../models/user')

const initialItems = [
    {
        name: "Test Item name 1",
        description: "a brief description of the product",
        avgRating: 3,
        imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
        isOnSale: "yes",
        price: 1200,
        stockCount: 13
    },
  {
        name: "Test Item name 2",
        description: "a brief description of the test product 2",
        avgRating: 5,
        imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
        isOnSale: "no",
        price: 69,
        stockCount: 32
  },
  {
    name: "Test Item name 3",
    description: "a brief description of the product",
    avgRating: 3,
    imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
    isOnSale: "yes",
    price: 1200,
    stockCount: 13
},
{
    name: "Test Item name 4",
    description: "a brief description of the test product 2",
    avgRating: 5,
    imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
    isOnSale: "no",
    price: 69,
    stockCount: 32
},
{
    name: "Test Item name 5",
    description: "a brief description of the product",
    avgRating: 3,
    imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
    isOnSale: "yes",
    price: 1200,
    stockCount: 13
},
{
    name: "Test Item name 6",
    description: "a brief description of the test product 2",
    avgRating: 5,
    imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
    isOnSale: "no",
    price: 69,
    stockCount: 32
},
{
    name: "Test Item name 7",
    description: "a brief description of the product",
    avgRating: 3,
    imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
    isOnSale: "yes",
    price: 1200,
    stockCount: 13
},
{
    name: "Test Item name 8",
    description: "a brief description of the test product 2",
    avgRating: 5,
    imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
    isOnSale: "no",
    price: 69,
    stockCount: 32
},
]

const inexistentId = async () => {
    const item = new Item(
        {
        name: "Item name",
        description: "a brief description of the product",
        avgRating: 3,
        imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
        isOnSale: "yes",
        price: 1200,
        stockCount: 13
        })
    await item.save()
    await item.remove()
    // console.log('item', item);
    return item
}

const itemsInDB = async () => {
    const items = await Item.find({})
    return items.map(item => item.name)
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(user => user.username)
}


module.exports = {
    initialItems,
    inexistentId,
    itemsInDB,
    usersInDb
}