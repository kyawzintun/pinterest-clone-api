const express = require('express');
const router = express.Router();
const image_controller = require('../controllers/imageController');

// Get image list
router.get('/', image_controller.image_list);

// Get image list by userid
router.get('/:userId/get', image_controller.image_list);

// Create image
router.post('/create', image_controller.image_create_post);

module.exports = router;
