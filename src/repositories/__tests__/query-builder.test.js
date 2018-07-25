import queryBuilder from '../query-builder';

describe('query builder', () => {
  const tableName = 'fakeTable';

  it('should thrown error if no table name is passed', () => {
    expect(() => queryBuilder()).toThrowError('missing-relation-name');
  });

  it('should return query with only table name', () => {
    const query = queryBuilder(tableName);

    expect(query).toBeDefined();
  });

  it('should return query with table name and transaction', () => {
    const transaction = jest.fn();

    const query = queryBuilder(tableName, transaction);

    expect(query).toBeDefined();
  });
});
