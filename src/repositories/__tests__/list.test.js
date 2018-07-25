import { list } from '..';

describe('test list query', () => {
  let query;
  const tableName = 'fakeTable';

  afterEach(() => {
    if (query) {
      query.limit.mockReset();
    }
  });

  it('should thrown error if not table or payload are missing', async () => {
    await expect(list()).rejects.toThrowError('missing-params');
  });

  it('should limit list to 25 items when not passed criteria limit', async () => {
    query = await list(tableName);
    expect(query.limit).toBeCalledWith(25);
  });

  it('should call where and limit list to 25 items if not passed', async () => {
    const criteria = { some: 'criteria' };
    query = await list(tableName, criteria);
    expect(query.limit).toBeCalledWith(25);
  });

  it('should not call limit if it is passed on criteria', async () => {
    const criteria = { limit: 5 };
    query = await list(tableName, criteria);
    expect(query.limit).not.toHaveBeenCalled();
  });
});
