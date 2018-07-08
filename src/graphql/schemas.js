const gql = require('graphql-tag');
const { makeExecutableSchema } = require('graphql-tools');

const book = require('./book');

const Query = gql`
  type Query {
    ${book.queries.schema}
  }
`;

const SchemaDefinition = gql`
  schema {
    query: Query
  }
`;

const typeDefs = [Query, SchemaDefinition, ...book.types];

const resolvers = {
  Query: {
    ...book.queries.resolvers,
  },
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
