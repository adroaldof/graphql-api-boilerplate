import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schemas from '../graphql/schemas';

export default function api({ port }) {
  return new Promise((resolve, reject) => {
    const app = express();
    app.use(bodyParser.json());

    function callback(error) {
      if (error) {
        return reject(error);
      }

      return resolve();
    }

    app.use('/graphql', graphqlExpress({ schema: schemas }));
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

    app.listen(port, callback);
  });
}
