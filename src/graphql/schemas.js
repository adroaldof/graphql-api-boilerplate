import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';

import book from './book';
import schemaDirectives from '../directives';

export const Query = gql`
  type Query {
    ${book.queries.schema}
  }
`;

export const Mutation = gql`
  type Mutation {
    ${book.mutations.schema}
  }
`;

export const SchemaDefinition = gql`
  schema {
    query: Query
    mutation: Mutation
  }
`;

const resolvers = {
  Query: {
    ...book.queries.resolvers,
  },
  Mutation: {
    ...book.mutations.resolvers,
  },
  ...book.fields.resolvers,
};

const typeDefs = [Query, Mutation, SchemaDefinition, ...book.types];

export default makeExecutableSchema({ resolvers, typeDefs, schemaDirectives });
