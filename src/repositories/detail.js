import queryBuilder from './query-builder';

export default async function detail(tableName, id, transaction) {
  if (!tableName || !id) {
    throw new Error('missing-params');
  }

  const query = queryBuilder(tableName, transaction)
    .where({ id })
    .first();

  const results = await query;
  return results;
}
