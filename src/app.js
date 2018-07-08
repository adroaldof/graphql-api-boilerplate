const { hostname, port } = require('./config');

const api = require('./express');

api({ port })
  .then(() => console.info(`Listen on http://${hostname}:${port}/graphiql`))
  .catch(error => {
    console.error('Error running API', error);
  });
