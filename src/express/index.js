import bodyParser from 'body-parser';
import express from 'express';
import { ApolloEngine } from 'apollo-engine';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import auth from '../auth';
import healthCheck from './health-check';
import schemas from '../graphql/schemas';

export default function api({ port, apolloEngineKey }) {
  return new Promise((resolve, reject) => {
    const expressApp = express();

    function callback(error) {
      if (error) {
        return reject(error);
      }

      return resolve();
    }

    expressApp.use(bodyParser.json());
    expressApp.use('/healthz', healthCheck);
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
