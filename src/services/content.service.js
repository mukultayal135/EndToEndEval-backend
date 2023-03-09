const { ContentType } = require('../models');
const HTTPError = require('../errors/HTTPError');

const createContent = async (name) => {
  const exists = await ContentType.findOne({
    where: { name },
  });
  if (exists) throw new HTTPError(409, 'Content already exists');
  const result = await ContentType.create({ name, fields: [] });
  return result;
};
module.exports = { createContent };
