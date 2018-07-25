import { update } from '..';
import queryBuilder from '../../config/knex';

describe('test update query', () => {
  const data = { fake: 'data' };

  it('should thrown error if not table or payload are missing', async () => {
    await expect(update()).rejects.toThrow();
  });

  it('should thrown error if no id is supplied', async () => {
    await expect(update('table', null, data)).rejects.toThrow();
  });

  it('should throw error if entity is not found', async () => {
    queryBuilder.mockReturnValueOnce({
      update: jest.fn().mockReturnValueOnce({
        where: jest.fn().mockReturnValueOnce(null),
      }),
    });

    await expect(update('fake_table', 'missingId', data)).rejects.toThrowError('not-found');
  });

  it('should return id', async () => {
    const updated = { id: 10, key: 'value' };

    queryBuilder.mockReturnValueOnce({
      update: jest.fn().mockReturnValueOnce({
        where: jest.fn().mockReturnValueOnce(updated),
      }),
    });

    queryBuilder.mockReturnValueOnce({
      where: jest.fn().mockReturnValueOnce({
        first: jest.fn().mockReturnValueOnce(updated),
      }),
    });
    await expect(update('fake_table', 10, data)).resolves.toBe(updated);
  });
});
