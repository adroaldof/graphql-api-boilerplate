const tableName = 'book';

exports.up = async knex =>
  knex.schema.createTable(tableName, table => {
    table
      .increments('id')
      .primary()
      .unique();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.string('name');
    table.string('description');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = async knex => knex.schema.dropTable(tableName);
