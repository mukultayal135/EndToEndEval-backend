const express = require('express');
const contentController = require('../controllers/content.controller');
const {
  validateBody,
  validateParams,
} = require('../middlewares/joiValidation');
const schemas = require('../schemas/schema');

const router = express.Router();

router
  .route('/content')
  .post(
    validateBody(schemas.contentTypeSchema),
    contentController.createContent
  )
  .get(contentController.getAllContents);
router.patch(
  '/content/:id',
  validateParams(schemas.idSchema),
  contentController.updateContent
);

router
  .route('/content/:id/fields')
  .post(
    validateBody(schemas.fieldSchema),
    validateParams(schemas.idSchema),
    contentController.createField
  )
  .delete(
    validateBody(schemas.fieldSchema),
    validateParams(schemas.idSchema),
    contentController.deleteField
  )
  .patch(
    validateBody(schemas.updateFieldSchema),
    validateParams(schemas.idSchema),
    contentController.updateField
  );

module.exports = router;
