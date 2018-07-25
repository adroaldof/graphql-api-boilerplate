import { detail } from '..';
import queryBuilder from '../../config/knex';

describe('detail repository', () => {
  const id = '123';
  const tableName = 'fakeTable';

  it('should thrown error if not table or payload are missing', async () => {
    await expect(detail()).rejects.toThrow();
  });

  it('should thrown error when no id is supplied', async () => {
    await expect(detail(tableName)).rejects.toThrow();
  });

  it('should return id', async () => {
    const data = [{ id, other: 'key' }];

    queryBuilder.mockReturnValueOnce({
      where: jest.fn().mockReturnValueOnce({
        first: jest.fn().mockReturnValueOnce(data),
      }),
    });

    await expect(detail(tableName, id)).resolves.toBe(data);
  });
});
