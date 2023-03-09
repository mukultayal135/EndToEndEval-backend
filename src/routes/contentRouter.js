const express = require('express');
const contentController = require('../controllers/content.controller');

const router = express.Router();

router.post('/content', contentController.createContent);
module.exports = router;