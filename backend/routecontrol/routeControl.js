const Items = require('../models/itemModel1')

const getItem = async (req, res) => {
    try {
        const item = await Items.find()
        res.status(200).json(item)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const createItem = async (req, res, next) => {
    try {
        if (!req.body.name) {
            res.status(400)
        } 
        const newItem = await Items.create({
            name : req.body.name
        })
        
        res.status(200).json(newItem)
    } catch (error) {
        console.log(error.message)
        res.json(error)
    }
}

const updateItem = async (req, res) => {
    try {
        const updatedItem = await Items.findByIdAndUpdate(
            req.params.id, req.body, {
                new: true
            })
        await res.json(updatedItem)
    } catch (error) {
        res.status(404)
    }
 }

const deleteItem =  async (req, res) => {
    try {
        const item = await Items.findById(req.params.id)
        if (!item) {
            res.status(404).json({message: 'could not find item'})
        } else {
        const deletedItem = await Items.deleteOne(item)
        res.json({ message:'Item deleted',item})}
    } catch (error) {
        console.log(error.message)
        res.json(error)
    }
}

module.exports = {
    getItem,
    createItem,
    updateItem,
    deleteItem
}