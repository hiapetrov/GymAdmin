const express = require('express')
const { getItem, createItem, updateItem, deleteItem } = require('../routecontrol/routeControl')
const router = express.Router()

router.route('/').get(getItem).post(createItem)
router.route('/:id').put(updateItem).delete(deleteItem)

module.exports = router