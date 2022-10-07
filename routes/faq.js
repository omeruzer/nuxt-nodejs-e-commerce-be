const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');

// Controller
const FaqController = require('../controllers/FaqController.js')

router.get('/', FaqController.all)
router.get('/:id', FaqController.detail)
router.post('/', FaqController.add)
router.patch('/:id', FaqController.edit)
router.delete('/:id', FaqController.remove)
router.delete('/delete/all', FaqController.removeAll)
router.post('/import/data', FaqController.importData)

module.exports = router