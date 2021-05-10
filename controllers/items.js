const itemsRouter = require('express').Router()
const itemModel = require('../models/item')
const multer = require('multer')
const path = require('path')

const logger = require('../utils/logger')

itemsRouter.get('/list', async (req, res, error) => {

    const params = req.query

    console.log('params', params);

    if (params.q) {
        const queriedItems = await itemModel.find({name: params.q})
        res.send({items : queriedItems})
    }

    let items = null

    if (params.isOnSale) {
        items = await itemModel.find({isOnSale: params.isOnSale}).skip(parseInt(params.from)).limit(parseInt(params.size))
    } else {
        items = await itemModel.find({}).skip(parseInt(params.from)).limit(parseInt(params.size))
    }

    res.send({items : items})
})

itemsRouter.get('/:id', async (req, res, error) => {
    const id = req.params.id
    const item = await itemModel.findById(id)
    res.send(item)
})

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

itemsRouter.post('/upload', async (req, res) => {
    upload(req, res, async (err) => {

        const item_received = req.body
        logger.info(item_received);

        const image_path = req.file.path
        logger.info('req.file', req.file)
        item_received.imageUrl = `http://localhost:5000/${image_path.slice(7)}`
        logger.info(item_received)

        const item = new itemModel(item_received)

        const saved_item = await item.save()

        res.send(saved_item)
    })
    // res.send()
})

module.exports = itemsRouter