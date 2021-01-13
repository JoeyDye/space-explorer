const express = require('express')
const router = express.Router()
const searchController = require('../controllers/searchController')
const auth = require('../middleware/auth')

router.get('/:query/:start', auth, searchController.searchNasaDatabase)

module.exports = router
