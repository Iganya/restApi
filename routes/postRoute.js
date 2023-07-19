const express = require('express')
const router = express.Router()

const postController = require('../controllers/postController')

router.get('/api/post', postController.indexPost)

router.post('/api/post',postController.storePost)

router.get('/api/post/:id', postController.showPost)

router.put('/api/post/:id', postController.updatePost)

router.delete('/api/post/:id', postController.deletePost)


module.exports = router