import { create } from '..';
import queryBuilder from '../../config/knex';

describe('create repository', () => {
  const tableName = 'fakeTable';

  it('should thrown error if not table or payload are missing', async () => {
    await expect(create()).rejects.toThrow();
  });

  it('should thrown error if could not create', async () => {
    const payload = { can: 'not create' };

    queryBuilder.mockReturnValueOnce({
      insert: jest.fn().mockReturnValueOnce({
        returning: jest.fn().mockResolvedValueOnce([0]),
      }),
    });

    await expect(create(tableName, payload)).rejects.toThrowError('create-error');
  });

  it('should return created object', async () => {
    const id = 10;
    const payload = { id, other: 'key' };

    queryBuilder.mockReturnValueOnce({
      insert: jest.fn().mockReturnValueOnce({
        returning: jest.fn().mockResolvedValueOnce([id]),
      }),
    });

    queryBuilder.mockReturnValueOnce({
      where: jest.fn().mockReturnValueOnce({
        first: jest.fn().mockReturnValueOnce(payload),
      }),
    });

    await expect(create(tableName, payload)).resolves.toBe(payload);
  });
});
