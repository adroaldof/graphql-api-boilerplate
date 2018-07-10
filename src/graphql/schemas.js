import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';

import book from './book';

const Query = gql`
  type Query {
    ${book.queries.schema}
  }
`;

const Mutations = gql`
  type Mutations {
    ${book.mutations.schema}
  }
`;

const SchemaDefinition = gql`
  schema {
    query: Query
    mutation: Mutations
  }
`;

const typeDefs = [Query, Mutations, SchemaDefinition, ...book.types];

const resolvers = {
  Query: {
    ...book.queries.resolvers,
  },
  Mutations: {
    ...book.mutations.resolvers,
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
