const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');

// Controller
const OrderController = require('../controllers/OrderController.js')

router.get('/', OrderController.all)
router.get('/:id', OrderController.detail)
router.post('/', OrderController.add)
router.patch('/:id', OrderController.edit)
router.delete('/:id', OrderController.remove)
router.delete('/delete/all', OrderController.removeAll)
router.post('/import/data', OrderController.importData)

module.exports = router