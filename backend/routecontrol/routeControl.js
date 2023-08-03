const Items = require('../models/itemModel1')

const getItem = async (req, res) => {
    console.log('connected to React')

    const item = await Items.find()

    res.json(item)
}

const createItem = async (req, res, next) => {
    try {
        const item = await Items.create({
        name : req.body.name,
        lastName: req.body.lastName,
        date: req.body.date
        })
        console.log('connected to React')
        await res.redirect('http://localhost:3000/')
    } catch (error) {
        console.log(error.message)

        await res.redirect('http://localhost:3000/')
    }
    
}

const updateItem = async (req, res) => {
    const id = req.params.id
    await res.json({ message: `Updated Item ${id}`})
 }

const deleteItem =  async (req, res) => {
    const id = req.params.id
    await res.json({ message: `Deleted Item ${id}`})
}

module.exports = {
    getItem,
    createItem,
    updateItem,
    deleteItem
}