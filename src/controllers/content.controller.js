const contentService = require('../services/content.service');
const HTTPError = require('../errors/HTTPError');

const createContent = async (req, res) => {
  try {
    const { name } = req.body;
    const content = await contentService.createContent(name);
    res.status(201).json(content);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code);
      res.json({ message: error.message });
    } else {
      res.status(500);
      res.json({ message: error.message });
    }
  }
};
module.exports = {
  createContent,
};
