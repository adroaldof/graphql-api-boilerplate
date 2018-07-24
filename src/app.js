import configs from './config';

import api from './express';
import { runMigrations, runSeeds } from './config/knex';

const { hostname, port, apolloEngineKey } = configs;

runMigrations()
  .then(() => runSeeds())
  .then(() => api({ port, apolloEngineKey }))
  .then(() => console.info(`Listen on http://${hostname}:${port}/graphiql`))
  .catch(error => {
    console.error('Error running API', error);
  });
