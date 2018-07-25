import Book from './Book';

const schema = `
  createBook (input: BookInput!): Book!
  updateBook (id: String!, input: BookUpdateInput!): Book!
  removeBook (id: String!): Boolean
`;

const resolvers = {
  createBook: async (root, { input }) => Book.create(input),
  updateBook: async (root, { id, input }) => Book.update(id, input),
  removeBook: async (root, { id }) => Book.remove(id),
};

export default { schema, resolvers };
