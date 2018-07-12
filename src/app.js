import configs from './configs';

import api from './express';

const { hostname, port, apolloEngineKey } = configs;

api({ port, apolloEngineKey })
  .then(() => console.info(`Listen on http://${hostname}:${port}/graphiql`))
  .catch(error => {
    console.error('Error running API', error);
  });
