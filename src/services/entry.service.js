const { Entry } = require('../models');

const createEntry = async (contentId, entry) => {
  const result = await Entry.create({ contentTypeId: contentId, value: entry });
  return result;
};

const getAllEntries = async (contentId) => {
  const result = await Entry.findAll({ where: { contentTypeId: contentId } });
  return result;
};

const updateEntry = async (entryId, entry) => {
  const result = await Entry.update(
    { value: entry },
    { where: { id: entryId } }
  );
  return result;
};

const deleteEntry = async (entryId) => {
  const result = await Entry.destroy({ where: { id: entryId } });
  return result;
};

module.exports = {
  createEntry,
  getAllEntries,
  updateEntry,
  deleteEntry,
};
