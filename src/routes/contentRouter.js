const express = require('express');
const contentController = require('../controllers/content.controller');

const router = express.Router();

router
  .route('/content')
  .post(contentController.createContent)
  .get(contentController.getAllContents);
router.patch('/content/:id', contentController.updateContent);

router
  .route('/content/:id/fields')
  .post(contentController.createField)
  .delete(contentController.deleteField);

module.exports = router;
