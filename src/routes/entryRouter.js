const express = require('express');
const entryController = require('../controllers/entry.controller');

const router = express.Router();

router
  .route('/:id/entry')
  .post(entryController.createEntry)
  .get(entryController.getAllEntries);
router
  .route('/:id/entry')
  .put(entryController.updateEntry)
  .delete(entryController.deleteEntry);

module.exports = router;
