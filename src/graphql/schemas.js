import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';

import book from './book';

export const Query = gql`
  type Query {
    ${book.queries.schema}
  }
`;

export const Mutation = gql`
  type Mutations {
    ${book.mutations.schema}
  }
`;

export const SchemaDefinition = gql`
  schema {
    query: Query
    mutation: Mutations
  }
`;

const resolvers = {
  Query: {
    ...book.queries.resolvers,
  },
  Mutations: {
    ...book.mutations.resolvers,
  },
};

const typeDefs = [Query, Mutation, SchemaDefinition, ...book.types];

export default makeExecutableSchema({ resolvers, typeDefs });
