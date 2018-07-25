import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { ApolloEngine } from 'apollo-engine';

import schemas from '../graphql/schemas';
import auth from '../auth';

export default function api({ port, apolloEngineKey }) {
  return new Promise((resolve, reject) => {
    const expressApp = express();
    expressApp.use(bodyParser.json());

    function callback(error) {
      if (error) {
        return reject(error);
      }

      return resolve();
    }

    expressApp.use(auth.initialize());

    expressApp.use(
      '/graphql',
      graphqlExpress(req => ({
        schema: schemas,
        tracing: true,
        cacheControl: true,
        context: req,
      })),
    );

    expressApp.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

    if (apolloEngineKey) {
      const apolloEngine = new ApolloEngine({ apiKey: apolloEngineKey });

      apolloEngine.listen({ port, expressApp }, callback);
    } else {
      expressApp.listen(port, callback);
    }
  });
}
