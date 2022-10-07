const express = require('express')
const router = express.Router()

// Controller
const ImportData = require('../controllers/ImportData.js')

router.post('/', ImportData.importData)

module.exports = router