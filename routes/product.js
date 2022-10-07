const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');

// Controller
const ProductController = require('../controllers/ProductController.js')

router.get('/', ProductController.all)
router.get('/best-seller', ProductController.bestSeller)
router.get('/new-product', ProductController.newProduct)
router.get('/:id', ProductController.detail)
router.post('/', ProductController.add)
router.patch('/:id', ProductController.edit)
router.delete('/:id', ProductController.remove)
router.delete('/delete/all', ProductController.removeAll)
router.post('/import/data', ProductController.importData)
router.get('/search/data', ProductController.search)


module.exports = router