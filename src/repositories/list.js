import queryBuilder from './query-builder';

export default async function list(tableName, criteria, transaction) {
  if (!tableName) {
    throw new Error('missing-params');
  }

  const query = queryBuilder(tableName, transaction);

  if (criteria) {
    query.where(criteria);
  }

  if (!criteria || !criteria.limit) {
    query.limit(25);
  }

  const results = await query;
  return results;
}
