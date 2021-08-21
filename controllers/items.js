const itemsRouter = require('express').Router()
const itemModel = require('../models/item')
const multer = require('multer')
const path = require('path')

const logger = require('../utils/logger')

itemsRouter.get('/list', async (req, res, error) => {
    // Get the params fron the query in the request object
    const params = req.query
    if (params.q) { // If there is a query parameter, gather all data in the database and search
        const allItems = await itemModel.find({})
        const queriedItems = allItems.filter(item => item.name.includes(params.q))
        res.send({items : queriedItems})
    }

    let items = null
    let totalItems = null
    if (params.isOnSale === 'true' ) {
        items = await itemModel.find({isOnSale: params.isOnSale}).skip(parseInt(params.from)).limit(parseInt(params.size))
        totalItems = await itemModel.countDocuments({isOnSale: params.isOnSale})
    } else {
        items = await itemModel.find({}).skip(parseInt(params.from)).limit(parseInt(params.size))
        totalItems = await itemModel.countDocuments({})
    }

    res.send({items : items, total: totalItems})
})

itemsRouter.get('/:id', async (req, res, error) => {
    const id = req.params.id
    const item = await itemModel.findById(id)
    console.log('item:', item);
    if (item) {
        res.send(item)
    } else {
        res.send(400)
    }
})

// Still trying to figure out why I created this route
itemsRouter.post('/', async (req, res, error) => {
    const item_received = req.body
    logger.info(item_received);
    const item = new itemModel(item_received)
    const saved_item = await item.save()
    res.send(saved_item)
})

const storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req, file, cb){
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
})

//multer options
const upload = multer({
    storage: storage
}).single('image')

// This route is used to upload or save new item to the backend server
itemsRouter.post('/upload', async (req, res) => {
    upload(req, res, async (err) => {

        const item_received = req.body
        logger.info(item_received);

        const image_path = req.file.path
        item_received.imageUrl = `http://localhost:5000/${image_path.slice(7)}`
        logger.info(item_received)

        const item = new itemModel(item_received)

        const saved_item = await item.save()

        res.send(saved_item)
    })
    // res.send()
})

itemsRouter.delete('/:id', async (req, res) => {
    
    const idOfItemToDelete = req.params.id
    // find the item with that id and delete
    await itemModel.findByIdAndDelete(idOfItemToDelete)
    
    // Response with status 204, meaning the user after making this request can continue
    // in the current page, editing what ever he/she was doing
    res.sendStatus(204);
})

module.exports = itemsRouter