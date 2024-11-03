const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')
const checkAuth = require('../helpers/check-auth')
const { imageUpload } = require('../helpers/image-uploader')

router.get('/', PostController.showPosts)

router.post('/create', checkAuth, imageUpload.single("image"), PostController.create)

router.patch('/:id', checkAuth, imageUpload.single("image"), PostController.edit)

router.delete('/:id', checkAuth, PostController.remove)

module.exports = router