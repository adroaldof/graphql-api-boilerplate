import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';

import book from './book';
import user from './user';

import schemaDirectives from '../directives';

export const Query = gql`
  type Query {
    ${book.queries.schema}
    ${user.queries.schema}
  }
`;

export const Mutation = gql`
  type Mutation {
    ${book.mutations.schema}
    ${user.mutations.schema}
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
    ...user.queries.resolvers,
  },
  Mutation: {
    ...book.mutations.resolvers,
    ...user.mutations.resolvers,
  },
  ...book.fields.resolvers,
};

const typeDefs = [Query, Mutation, SchemaDefinition, ...book.types, ...user.types];

export default makeExecutableSchema({ resolvers, typeDefs, schemaDirectives });
