const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/userController');

/* Create new user */
router.post('/create', book_controller.user_create_post);

module.exports = router;
