import { makeExecutableSchema } from 'graphql-tools';

import { Query, Mutation, SchemaDefinition } from '../schemas';

import book from '../book';

jest.mock('graphql-tools', () => ({ makeExecutableSchema: jest.fn() }));

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
    });
  });
});
