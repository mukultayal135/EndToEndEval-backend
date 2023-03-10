const express = require('express');
const entryController = require('../controllers/entry.controller');
const { validateParams } = require('../middlewares/joiValidation');
const schemas = require('../schemas/schema');

const router = express.Router();

router
  .route('/:id/entry')
  .post(validateParams(schemas.idSchema), entryController.createEntry)
  .get(validateParams(schemas.idSchema), entryController.getAllEntries);
router
  .route('/:id/entry')
  .put(validateParams(schemas.idSchema), entryController.updateEntry)
  .delete(validateParams(schemas.idSchema), entryController.deleteEntry);

module.exports = router;
