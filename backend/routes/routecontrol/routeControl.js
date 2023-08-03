const getItem = (req, res) => {
    res.json({ message: 'Data from DB'})
}

const createItem =  (req, res) => {
    res.json({ message: `Data created on DB}`})
}

const updateItem = (req, res) => {
    const id = req.params.id
    res.json({ message: `Updated Item ${id}`})
 }

const deleteItem =  (req, res) => {
    const id = req.params.id
    res.json({ message: `Deleted Item ${id}`})
}

module.exports = {
    getItem,
    createItem,
    updateItem,
    deleteItem
}