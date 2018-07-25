import queryBuilder from './query-builder';

export default async function create(tableName, payload, transaction) {
  if (!tableName || !payload || !Object.keys(payload).length) {
    throw new Error('missing-params');
  }

  const [id] = await queryBuilder(tableName, transaction)
    .insert(payload)
    .returning('id');

  if (!id) {
    throw new Error('create-error');
  }

  const created = await queryBuilder(tableName, transaction)
    .where({ id })
    .first();

  return created;
}
