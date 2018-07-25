import { makeExecutableSchema } from 'graphql-tools';

import { Query, Mutation, SchemaDefinition } from '../schemas';

import book from '../book';
import user from '../user';

import schemaDirectives from '../../directives';

jest.mock('graphql-tools', () => ({ makeExecutableSchema: jest.fn(), SchemaDirectiveVisitor: jest.fn() }));

describe('graphql schemas', () => {
  it('should test type definitions', () => {
    expect(makeExecutableSchema).toHaveBeenCalledWith({
      resolvers: {
        Query: {
          ...book.queries.resolvers,
          ...user.queries.resolvers,
        },
        Mutation: {
          ...book.mutations.resolvers,
          ...user.mutations.resolvers,
        },
        ...book.fields.resolvers,
      },
      typeDefs: [Query, Mutation, SchemaDefinition, ...book.types, ...user.types],
      schemaDirectives,
    });
  });
});
