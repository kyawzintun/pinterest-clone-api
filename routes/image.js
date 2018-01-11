const express = require('express');
const router = express.Router();
const image_controller = require('../controllers/imageController');

/* Create image */
router.post('/create', image_controller.image_create_post);

module.exports = router;
