import { remove } from '..';
import queryBuilder from '../../config/knex';

jest.mock('../../config/knex');

describe('test remove query', () => {
  it('should thrown error if not table or payload are missing', async () => {
    await expect(remove()).rejects.toThrow();
  });

  it('should throw error if entity is not found', async () => {
    queryBuilder.mockReturnValueOnce({
      where: jest.fn().mockReturnValueOnce({
        del: jest.fn().mockReturnValueOnce(0),
      }),
    });

    await expect(remove('fake_table', 'missingId')).resolves.toEqual(0);
  });

  it('should return id', async () => {
    await expect(remove('fake_table', 10)).resolves.toBeDefined();
  });
});
