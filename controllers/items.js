const itemsRouter = require('express').Router()
const itemModel = require('../models/item')
const multer = require('multer')
const path = require('path')

const logger = require('../utils/logger')

itemsRouter.get('/list', async (request, response, error) => {
    const items = await itemModel.find({})
    response.send({items : items})
})

itemsRouter.post('/', async (request, response, error) => {
    const item_received = request.body
    logger.info(item_received);

    const item = new itemModel(item_received)

    const saved_item = await item.save()

    response.send(saved_item)

})

const storage = multer.diskStorage({
    destination: 'images',
    filename: function(req, file, cb){
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

//multer options
const upload = multer({
    storage: storage
}).single('upload')

itemsRouter.post('/upload', (req, res) => {
    console.log('uploading image');
    console.log(req.file);
    upload(req, res, (err) => {
        console.log('req.file', req.file);
        console.log('req.body', req.body);
    })
    res.send()
})

module.exports = itemsRouter