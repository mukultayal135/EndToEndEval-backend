const { ContentType } = require('../models');
const { Entry } = require('../models');
const HTTPError = require('../errors/HTTPError');

const createContent = async (name) => {
  const exists = await ContentType.findOne({
    where: { name },
  });
  if (exists) throw new HTTPError(409, 'Content already exists');
  const result = await ContentType.create({ name, fields: [] });
  return result;
};

const getAllContents = async () => {
  const result = await ContentType.findAll();
  return result;
};

const updateContent = async (id, name) => {
  const result = await ContentType.update({ name }, { where: { id } });
  return result;
};

const createField = async (id, field) => {
  const content = await ContentType.findOne({ where: { id } });
  const fieldsArray = content.fields;

  if (fieldsArray.includes(field)) {
    throw new HTTPError(409, 'Field already exists');
  }
  fieldsArray.push(field);
  const result = await ContentType.update(
    { fields: fieldsArray },
    { where: { id } }
  );
  const entries = await Entry.findAll({ where: { contentTypeId: id } });
  entries.forEach(async (entry) => {
    const entryValue = entry.value;
    entryValue[field] = '';
    await Entry.update({ value: entryValue }, { where: { id: entry.id } });
  });
  return result;
};

const deleteField = async (id, field) => {
  const content = await ContentType.findOne({ where: { id } });
  const fieldsArray = content.fields;
  const index = fieldsArray.indexOf(field);
  if (index > -1) {
    fieldsArray.splice(index, 1);
  }
  const result = await ContentType.update(
    { fields: fieldsArray },
    { where: { id } }
  );
  const entries = await Entry.findAll({ where: { contentTypeId: id } });
  entries.forEach(async (entry) => {
    const entryValue = entry.value;
    delete entryValue[field];
    await Entry.update({ value: entryValue }, { where: { id: entry.id } });
  });
  return result;
};

const updateField = async (id, field, newField) => {
  const entryExist = await Entry.findOne({ where: { contentTypeId: id } });
  if (entryExist) {
    throw new HTTPError(409, 'Cannot edit the field');
  }
  const content = await ContentType.findOne({ where: { id } });
  const fieldsArray = content.fields;
  const index = fieldsArray.indexOf(field);
  if (index > -1) {
    fieldsArray[index] = newField;
  }
  const result = await ContentType.update(
    { fields: fieldsArray },
    { where: { id } }
  );
  return result;
};

module.exports = {
  createContent,
  getAllContents,
  createField,
  updateContent,
  deleteField,
  updateField,
};
