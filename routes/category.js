const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');

// Controller
const CategoryController = require('../controllers/CategoryController.js')

router.get('/', CategoryController.all)
router.get('/:id', CategoryController.detail)
router.post('/', CategoryController.add)
router.patch('/:id', CategoryController.edit)
router.delete('/:id', CategoryController.remove)
router.delete('/delete/all', CategoryController.removeAll)
router.post('/import/data', CategoryController.importData)

module.exports = router