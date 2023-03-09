const entityService = require('../services/entry.service');
const HTTPError = require('../errors/HTTPError');

const createEntry = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await entityService.createEntry(id, data);
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
    const result = await entityService.getAllEntries(id);
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
    console.log(id, data);
    const result = await entityService.updateEntry(id, data);
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
    const result = await entityService.deleteEntry(id);
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
