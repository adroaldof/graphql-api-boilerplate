import configs from './configs';

import api from './express';

const { hostname, port } = configs;

api({ port })
  .then(() => console.info(`Listen on http://${hostname}:${port}/graphiql`))
  .catch(error => {
    console.error('Error running API', error);
  });
