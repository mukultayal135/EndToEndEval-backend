const contentService = require('../services/content.service');
const HTTPError = require('../errors/HTTPError');

const createContent = async (req, res) => {
  try {
    const { name } = req.body;
    const content = await contentService.createContent(name);
    res.status(201).json(content);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};
const getAllContents = async (req, res) => {
  try {
    const contents = await contentService.getAllContents();
    res.status(200).json(contents);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};

const updateContent = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const content = await contentService.updateContent(id, name);
    res.status(200).json(content);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};

const createField = async (req, res) => {
  try {
    const { id } = req.params;
    const { field } = req.body;
    const fieldCreated = await contentService.createField(id, field);
    res.status(201).json(fieldCreated);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};

const deleteField = async (req, res) => {
  try {
    const { id } = req.params;
    const { field } = req.body;
    const content = await contentService.deleteField(id, field);
    res.status(200).json(content);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};

const updateField = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldName, newName } = req.body;
    const content = await contentService.updateField(id, oldName, newName);
    res.status(200).json(content);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};

module.exports = {
  createField,
  updateContent,
  createContent,
  getAllContents,
  deleteField,
  updateField,
};
