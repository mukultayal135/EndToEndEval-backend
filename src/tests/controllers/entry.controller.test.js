const entryService = require('../../services/entry.service');
const entryController = require('../../controllers/entry.controller');
const HTTPError = require('../../errors/HTTPError');

describe('Entry Controller', () => {
  describe('createEntry', () => {
    it('should create an entry', async () => {
      const req = {
        body: {
          title: 'test',
          content: 'test',
        },
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const result = {
        title: 'test',
        content: 'test',
      };
      jest.spyOn(entryService, 'createEntry').mockResolvedValue(result);
      await entryController.createEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(result);
    });
    it('should return 401 error', async () => {
      const req = {
        body: {
          title: 'test',
          content: 'test',
        },
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = new HTTPError(401, 'Unauthorized');
      jest.spyOn(entryService, 'createEntry').mockRejectedValue(error);
      await entryController.createEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: error.message });
    });
    it('should return 500 error', async () => {
      const req = {
        body: {
          title: 'test',
          content: 'test',
        },
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = new Error('Internal server error');
      jest.spyOn(entryService, 'createEntry').mockRejectedValue(error);
      await entryController.createEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
  describe('getAllEntries', () => {
    it('should get all entries', async () => {
      const req = {
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const result = [
        {
          title: 'test',
          content: 'test',
        },
      ];
      jest.spyOn(entryService, 'getAllEntries').mockResolvedValue(result);
      await entryController.getAllEntries(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(result);
    });
    it('should return 401 error', async () => {
      const req = {
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = new HTTPError(401, 'Unauthorized');
      jest.spyOn(entryService, 'getAllEntries').mockRejectedValue(error);
      await entryController.getAllEntries(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: error.message });
    });
    it('should return 500 error', async () => {
      const req = {
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = new Error('Internal server error');
      jest.spyOn(entryService, 'getAllEntries').mockRejectedValue(error);
      await entryController.getAllEntries(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
  describe('updateEntry', () => {
    it('should update an entry', async () => {
      const req = {
        body: {
          title: 'test',
          content: 'test',
        },
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const result = {
        title: 'test',
        content: 'test',
      };
      jest.spyOn(entryService, 'updateEntry').mockResolvedValue(result);
      await entryController.updateEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(result);
    });
    it('should return 401 error', async () => {
      const req = {
        body: {
          title: 'test',
          content: 'test',
        },
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = new HTTPError(401, 'Unauthorized');
      jest.spyOn(entryService, 'updateEntry').mockRejectedValue(error);
      await entryController.updateEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: error.message });
    });
    it('should return 500 error', async () => {
      const req = {
        body: {
          title: 'test',
          content: 'test',
        },
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = new Error('Internal server error');
      jest.spyOn(entryService, 'updateEntry').mockRejectedValue(error);
      await entryController.updateEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
  describe('deleteEntry', () => {
    it('should delete an entry', async () => {
      const req = {
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(entryService, 'deleteEntry').mockResolvedValue([1]);
      await entryController.deleteEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([1]);
    });
    it('should return 401 error', async () => {
      const req = {
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = new HTTPError(401, 'Unauthorized');
      jest.spyOn(entryService, 'deleteEntry').mockRejectedValue(error);
      await entryController.deleteEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: error.message });
    });
    it('should return 500 error', async () => {
      const req = {
        params: {
          id: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = new Error('Internal server error');
      jest.spyOn(entryService, 'deleteEntry').mockRejectedValue(error);
      await entryController.deleteEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
});
