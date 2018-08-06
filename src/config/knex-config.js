const path = require('path');

const connectionData = {
  charset: process.env.DATABASE_CHARSET || 'utf8',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'postgres',
};

const configs = {
  client: process.env.DATABASE_CLIENT || 'pg',
  connection: process.env.DATABASE_URL || connectionData,
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
