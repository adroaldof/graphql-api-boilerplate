import knex from 'knex';
import config from './knex-config';

const connection = knex(config);

export async function runMigrations() {
  try {
    await connection.migrate.latest();
  } catch (error) {
    connection.destroy();
    throw error;
  }
}

export async function runSeeds() {
  try {
    await connection.seed.run();
  } catch (error) {
    connection.destroy();
    throw error;
  }
}

export default connection;
