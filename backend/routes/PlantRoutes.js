const express = require('express');
const router = express.Router();
const plantController = require('../controllers/PlantController');

const { imageUpload } = require('../helpers/image-uploader');
const checkAuth = require('../helpers/check-auth');
  
router.get('/', plantController.showAll)
router.post('/generate-plant', checkAuth, plantController.generatePlant)
router.delete('/:id', checkAuth, plantController.delete)

module.exports = router;
