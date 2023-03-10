const entryService = require('../services/entry.service');
const HTTPError = require('../errors/HTTPError');

const createEntry = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await entryService.createEntry(id, data);
    res.status(201).json(result);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};
const getAllEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await entryService.getAllEntries(id);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};

const updateEntry = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await entryService.updateEntry(id, data);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await entryService.deleteEntry(id);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json('Internal server error');
    }
  }
};
module.exports = {
  createEntry,
  getAllEntries,
  updateEntry,
  deleteEntry,
};
