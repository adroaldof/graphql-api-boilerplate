import queryBuilder from './query-builder';

export default async function update(tableName, id, payload, transaction) {
  if (!tableName || !id || !payload || !Object.keys(payload).length) {
    throw new Error('missing-params');
  }

  const updateResult = await queryBuilder(tableName, transaction)
    .update(payload)
    .where({ id });

  if (!updateResult) {
    throw new Error('not-found');
  }

  const updated = await queryBuilder(tableName, transaction)
    .where({ id })
    .first();

  return updated;
}
