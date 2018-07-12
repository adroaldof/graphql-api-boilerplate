import handlers from './handlers';

const schema = `
  createBook (input: BookInput!): Book!
  updateBook (id: String!, input: BookUpdateInput!): Book!
`;

const resolvers = {
  createBook: (root, { input }) => handlers.create(input),
  updateBook: (root, { id, input }) => handlers.update(id, input),
};

export default { schema, resolvers };
