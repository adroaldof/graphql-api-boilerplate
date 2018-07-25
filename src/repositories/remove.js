import queryBuilder from './query-builder';

export default async function remove(tableName, id, transaction) {
  if (!tableName || !id) {
    throw new Error('missing-params');
  }

  const removed = await queryBuilder(tableName, transaction)
    .where({ id })
    .del();

  return removed;
}
