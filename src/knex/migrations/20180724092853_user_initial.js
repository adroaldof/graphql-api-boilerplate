const tableName = 'user';

exports.up = async knex =>
  knex.schema.createTable(tableName, table => {
    table
      .increments('id')
      .primary()
      .unique();
    table
      .string('email')
      .unique()
      .notNullable();
    table.string('name');
    table.string('phone');
    table.string('password').notNullable();
    table.string('salt');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = async knex => knex.schema.dropTable(tableName);
