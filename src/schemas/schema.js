const Joi = require('joi');

const contentTypeSchema = Joi.object({
  name: Joi.string().required(),
});

const idSchema = Joi.object({
  id: Joi.number().required(),
});

const updateTypeSchema = Joi.object({
  name: Joi.string().required(),
});

const fieldSchema = Joi.object({
  field: Joi.string().required(),
});

const updateFieldSchema = Joi.object({
  oldName: Joi.string().required(),
  newName: Joi.string().required(),
});

const getAllEntriesSchema = Joi.object({
  id: Joi.number().required(),
});

const deleteEntrySchema = Joi.object({
  id: Joi.number().required(),
});

module.exports = {
  contentTypeSchema,
  updateTypeSchema,
  fieldSchema,
  idSchema,
  updateFieldSchema,
  getAllEntriesSchema,
  deleteEntrySchema,
};
