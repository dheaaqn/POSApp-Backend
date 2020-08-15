const router = require('express').Router()
const { getAllHistory, getHistoryById } = require('../controller/HistoryController')

// GET
router.get('/', getAllHistory)
router.get('/:id', getHistoryById)

// POST

module.exports = router