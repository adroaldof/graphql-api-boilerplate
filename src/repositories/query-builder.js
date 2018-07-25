import knex from '../config/knex';

export default function queryBuilder(tableName, transaction) {
  if (!tableName) {
    throw new Error('missing-relation-name');
  }

  const query = knex(tableName);

  if (transaction) {
    query.transacting(transaction);
  }

  return query;
}
