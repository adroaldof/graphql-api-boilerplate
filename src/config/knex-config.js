const path = require('path');

const configs = {
  client: process.env.DB_CLIENT || 'pg',
  connection: {
    charset: process.env.DB_CHARSET || 'utf8',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'postgres',
  },
  migrations: {
    tableName: 'migrations',
    directory: path.join(__dirname, '../knex/migrations'),
  },
  seeds: {
    directory: path.join(__dirname, '../knex/seeds'),
  },
  debug: false,
};

module.exports = configs;
