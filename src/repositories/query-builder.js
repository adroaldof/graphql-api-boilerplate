import knex from '../config/knex';

export default function queryBuilder(tableName, transaction) {
  const query = knex(tableName);

  if (transaction) {
    query.transacting(transaction);
  }

  return query;
}
