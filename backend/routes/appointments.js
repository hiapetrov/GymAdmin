const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Data from DB'})
})
router.post('/', (req, res) => {
   res.json({ message: `Data created on DB}`})
})
router.put('/:id', (req, res) => {
   const id = req.params.id
   res.json({ message: `Updated Item ${id}`})
})
router.delete(' /:id', (req, res) => {
   const id = req.params.id
   res.json({ message: `Deleted Item ${id}`})
})

module.exports = router