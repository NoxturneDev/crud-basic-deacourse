const express = require('express')
const router = express.Router()
const Item = require('../model/Item.model')

router.get('/', (req, res) => {
    Item.getItem(res)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Item.getItemById(id, res)
})

router.post('/update', (req, res) => {
    const data = {
        "id" : req.body.id,
        "name" : req.body.name,
        "price" : req.body.price
    }

    Item.updateItemById(data, res)
})

router.post('/add', (req, res) => {
    const data = {
        "name" : req.body.name,
        "price" : req.body.price
    }

    Item.addItem(data, res)
})


router.post('/remove', (req, res) => {
  const id = req.body.id

    Item.removeItem(id, res)
})



module.exports = router