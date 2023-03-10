const contentService = require('../../services/content.service');
const contentController = require('../../controllers/content.controller');
const HTTPError = require('../../errors/HTTPError');

describe('Content controller', () => {
  describe(' test createContent function', () => {
    it('should return 201 status code when content is created', async () => {
      const req = {
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'createContent')
        .mockResolvedValue({ name: 'test' });
      await contentController.createContent(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ name: 'test' });
    });
    it('should return 401 status code when HTTP error', async () => {
      const req = {
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'createContent')
        .mockRejectedValue(new HTTPError(401, 'Error'));
      await contentController.createContent(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
    it('should return 500 status code when error', async () => {
      const req = {
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'createContent')
        .mockRejectedValue(new Error('Error'));
      await contentController.createContent(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
  describe(' test getAllContents function', () => {
    it('should return 200 status code when contents are found', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'getAllContents')
        .mockResolvedValue([{ name: 'test' }]);
      await contentController.getAllContents(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ name: 'test' }]);
    });
    it('should return 401 status code when HTTP error', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'getAllContents')
        .mockRejectedValue(new HTTPError(401, 'Error'));
      await contentController.getAllContents(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
    it('should return 500 status code when error', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'getAllContents')
        .mockRejectedValue(new Error('Error'));
      await contentController.getAllContents(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
  describe(' test updateContent function', () => {
    it('should return 200 status code when content is updated', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(contentService, 'updateContent').mockResolvedValue([1]);
      await contentController.updateContent(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([1]);
    });
    it('should return 401 status code when HTTP error', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'updateContent')
        .mockRejectedValue(new HTTPError(401, 'Error'));
      await contentController.updateContent(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
    it('should return 500 status code when error', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'updateContent')
        .mockRejectedValue(new Error('Error'));
      await contentController.updateContent(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
  describe('test create field function', () => {
    it('should return 201 status code when field is created', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          field: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'createField')
        .mockResolvedValue({ name: 'test' });
      await contentController.createField(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ name: 'test' });
    });
    it('should return 401 status code when HTTP error', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          field: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'createField')
        .mockRejectedValue(new HTTPError(401, 'Error'));
      await contentController.createField(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
    it('should return 500 status code when error', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          field: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'createField')
        .mockRejectedValue(new Error('Error'));
      await contentController.createField(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });

  describe(' test deleteContent function', () => {
    it('should return 200 status code when content is deleted', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          field: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(contentService, 'deleteField').mockResolvedValue([1]);
      await contentController.deleteField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([1]);
    });
    it('should return 401 status code when HTTP error', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          field: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'deleteField')
        .mockRejectedValue(new HTTPError(401, 'Error'));
      await contentController.deleteField(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
    it('should return 500 status code when error', async () => {
      const req = {
        params: {
          id: '1',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'deleteField')
        .mockRejectedValue(new Error('Error'));
      await contentController.deleteField(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
  describe(' test updateField function', () => {
    it('should return 200 status code when field is updated', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(contentService, 'updateField').mockResolvedValue([1]);
      await contentController.updateField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([1]);
    });
    it('should return 401 status code when HTTP error', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'updateField')
        .mockRejectedValue(new HTTPError(401, 'Error'));
      await contentController.updateField(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
    it('should return 500 status code when error', async () => {
      const req = {
        params: {
          id: '1',
        },
        body: {
          name: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(contentService, 'updateField')
        .mockRejectedValue(new Error('Error'));
      await contentController.updateField(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Internal server error');
    });
  });
});
