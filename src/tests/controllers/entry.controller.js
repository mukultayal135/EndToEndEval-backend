const entryService = require('../../services/entry.service');
const HTTPError = require('../../errors/HTTPError');

describe('Entry Controller', () => {
  describe('createEntry', () => {
    it('should create an entry', async () => {
      const req = {
        body: {
          name: 'Test Entry',
        },
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const result = await entryService.createEntry(req.params.id, req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(result);
    });

    it('should return a 401 error', async () => {
      const req = {
        body: {
          title: 'Test Entry',
          content: 'This is a test entry',
        },
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entryService
        .createEntry(req.params.id, req.body)
        .rejects.toThrowError(new HTTPError('401', 'Unauthorized'));
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
    });
    it('should return a 500 error', async () => {
      const req = {
        body: {
          title: 'Test Entry',
          content: 'This is a test entry',
        },
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entryService
        .createEntry(req.params.id, req.body)
        .rejects.toThrowError(new Error());
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error',
      });
    });
  });
  describe('getAllEntries', () => {
    it('should get all entries', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const result = await entryService.getAllEntries(req.params.id);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(result);
    });
    it('should return a 401 error', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entryService
        .getAllEntries(req.params.id)
        .rejects.toThrowError(new HTTPError('401', 'Unauthorized'));
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
    });
    it('should return a 500 error', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entryService
        .getAllEntries(req.params.id)
        .rejects.toThrowError(new Error());
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error',
      });
    });
  });
  describe('updateEntry', () => {
    it('should update an entry', async () => {
      const req = {
        body: {
          name: 'Test Entry',
        },
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const result = await entryService.updateEntry(req.params.id, req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(result);
    });
    it('should return a 401 error', async () => {
      const req = {
        body: {
          title: 'Test Entry',
          content: 'This is a test entry',
        },
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entryService
        .updateEntry(req.params.id, req.body)
        .rejects.toThrowError(new HTTPError('401', 'Unauthorized'));
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
    });
    it('should return a 500 error', async () => {
      const req = {
        body: {
          title: 'Test Entry',
          content: 'This is a test entry',
        },
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entryService
        .updateEntry(req.params.id, req.body)
        .rejects.toThrowError(new Error());
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error',
      });
    });
  });
  describe('deleteEntry', () => {
    it('should delete an entry', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const result = await entryService.deleteEntry(req.params.id);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(result);
    });
    it('should return a 401 error', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entryService
        .deleteEntry(req.params.id)
        .rejects.toThrowError(new HTTPError('401', 'Unauthorized'));
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
    });
    it('should return a 500 error', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entryService
        .deleteEntry(req.params.id)
        .rejects.toThrowError(new Error());
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error',
      });
    });
  });
});
