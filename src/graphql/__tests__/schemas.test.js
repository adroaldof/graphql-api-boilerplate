import { makeExecutableSchema } from 'graphql-tools';

import { Query, Mutation, SchemaDefinition } from '../schemas';

import book from '../book';
import schemaDirectives from '../../directives';

jest.mock('graphql-tools', () => ({ makeExecutableSchema: jest.fn(), SchemaDirectiveVisitor: jest.fn() }));

describe('graphql schemas', () => {
  it('should test type definitions', () => {
    expect(makeExecutableSchema).toHaveBeenCalledWith({
      resolvers: {
        Query: {
          ...book.queries.resolvers,
        },
        Mutation: {
          ...book.mutations.resolvers,
        },
      },
      typeDefs: [Query, Mutation, SchemaDefinition, ...book.types],
      schemaDirectives,
    });
  });
});
