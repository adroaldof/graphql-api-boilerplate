const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schemas = require('../graphql/schemas');

const app = express();

function api({ port }) {
  return new Promise((resolve, reject) => {
    function callback(error) {
      if (error) {
        return reject(error);
      }

      return resolve();
    }

    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schemas }));
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

    app.listen(port, callback);
  });
}

module.exports = api;
