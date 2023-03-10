const { Entry } = require('../../models');
const entryService = require('../../services/entry.service');

describe('Entry Service', () => {
  describe('test create Entry function', () => {
    it('should create an entry when contentId and entry is given', async () => {
      const contentId = 1;
      const entry = { test: 'test' };
      jest
        .spyOn(Entry, 'create')
        .mockResolvedValue({ contentTypeId: contentId, value: entry });
      const result = await entryService.createEntry(contentId, entry);
      expect(result).toEqual({ contentTypeId: contentId, value: entry });
    });
  });
  describe('test get all Entries function', () => {
    it('should get all entries when contentId is given', async () => {
      const contentId = 1;
      const entry = { test: 'test' };
      jest
        .spyOn(Entry, 'findAll')
        .mockResolvedValue([{ contentTypeId: contentId, value: entry }]);
      const result = await entryService.getAllEntries(contentId);
      expect(result).toEqual([{ contentTypeId: contentId, value: entry }]);
    });
  });
  describe('test update Entry function', () => {
    it('should update an entry when entryId and entry is given', async () => {
      const entryId = 1;
      const entry = { test: 'test' };
      jest.spyOn(Entry, 'update').mockResolvedValue([1]);
      const result = await entryService.updateEntry(entryId, entry);
      expect(result).toEqual([1]);
    });
  });
  describe('test delete Entry function', () => {
    it('should delete an entry when entryId is given', async () => {
      const entryId = 1;
      jest.spyOn(Entry, 'destroy').mockResolvedValue(1);
      const result = await entryService.deleteEntry(entryId);
      expect(result).toEqual(1);
    });
  });
});
