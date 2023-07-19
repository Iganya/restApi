const express = require('express')

const router = express.Router()

const bookController = require('../controllers/bookShopController')


router.get('/api/book', bookController.getBooks)

router.post('/api/book', bookController.createBooks)

router.get('/api/book/:id', bookController.findBook)
router.patch('/api/book/:id', bookController.updateBook)
router.delete('/api/book/:id', bookController.deleteBook)

module.exports = router