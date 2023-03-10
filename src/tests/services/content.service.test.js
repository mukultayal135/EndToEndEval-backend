const { Entry, ContentType } = require('../../models');
const contentService = require('../../services/content.service');
const HTTPError = require('../../errors/HTTPError');

describe('Content Service', () => {
  describe('test create Content function', () => {
    it('should create a content type when name is given', async () => {
      const name = 'test';
      jest.spyOn(ContentType, 'findOne').mockResolvedValue(null);
      jest.spyOn(ContentType, 'create').mockResolvedValue({ name, fields: [] });
      const content = await contentService.createContent(name);
      expect(content).toEqual({ name, fields: [] });
    });
    it('should throw an error when users exits', async () => {
      const name = 'test';
      jest
        .spyOn(ContentType, 'findOne')
        .mockResolvedValue({ name, fields: [] });
      await expect(contentService.createContent(name)).rejects.toThrow(
        HTTPError
      );
    });
  });
  describe('test get all contents function', () => {
    it('should return all contents', async () => {
      const name = 'test';
      jest
        .spyOn(ContentType, 'findAll')
        .mockResolvedValue([{ name, fields: [] }]);
      const contents = await contentService.getAllContents();
      expect(contents).toEqual([{ name, fields: [] }]);
    });
  });
  describe('test update content function', () => {
    it('should update content name', async () => {
      const id = 1;
      const name = 'test';
      jest.spyOn(ContentType, 'update').mockResolvedValue([1]);
      const result = await contentService.updateContent(id, name);
      expect(result).toEqual([1]);
    });
  });
  describe('test create field function', () => {
    it('should create a field when field doesnt exit', async () => {
      const id = 1;
      const field = 'test';
      jest.spyOn(ContentType, 'findOne').mockResolvedValue({
        fields: [],
      });
      jest.spyOn(ContentType, 'update').mockResolvedValue([1]);
      jest.spyOn(Entry, 'findAll').mockResolvedValue([
        {
          id: 1,
          value: {},
        },
        {
          id: 2,
          value: {},
        },
      ]);
      jest.spyOn(Entry, 'update').mockResolvedValue([1]);
      const result = await contentService.createField(id, field);
      expect(result).toEqual([1]);
    });
    it('should throw an error when field already exists', async () => {
      const id = 1;
      const field = 'test';
      jest.spyOn(ContentType, 'findOne').mockResolvedValue({
        fields: [field],
      });
      await expect(contentService.createField(id, field)).rejects.toThrow(
        HTTPError
      );
    });
  });
  describe('test delete field function', () => {
    it('should delete a field when field exists', async () => {
      const id = 1;
      jest.spyOn(ContentType, 'findOne').mockResolvedValue({
        fields: ['test1', 'test2'],
      });
      jest.spyOn(ContentType, 'update').mockResolvedValue([1]);
      jest.spyOn(Entry, 'findAll').mockResolvedValue([
        {
          id: 1,
          value: {},
        },
        {
          id: 2,
          value: {},
        },
      ]);
      jest.spyOn(Entry, 'update').mockResolvedValue([1]);
      const result = await contentService.deleteField(id, 'test1');
      expect(result).toEqual([1]);
    });
  });
  describe('test update field function', () => {
    it('should update a field when with new field', async () => {
      const id = 1;
      const field = 'test';
      const newField = 'test2';
      jest.spyOn(Entry, 'findOne').mockResolvedValue(null);
      jest.spyOn(ContentType, 'findOne').mockResolvedValue({
        fields: [field],
      });
      jest.spyOn(ContentType, 'update').mockResolvedValue([1]);
      const result = await contentService.updateField(id, field, newField);
      expect(result).toEqual([1]);
    });
    it('should throw an error when entry exists', async () => {
      const id = 1;
      const field = 'test';
      const newField = 'test2';
      jest.spyOn(Entry, 'findOne').mockResolvedValue({
        id: 1,
        value: {},
      });
      await expect(
        contentService.updateField(id, field, newField)
      ).rejects.toThrow(HTTPError);
    });
  });
});
