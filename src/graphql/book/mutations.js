import { create, update } from './handlers';

const schema = `
  createBook (input: BookInput!): Book!
  updateBook (id: String!, input: BookUpdateInput!): Book!
`;

const resolvers = {
  createBook: (root, { input }) => create(input),
  updateBook: (root, { id, input }) => update(id, input),
};

export default { schema, resolvers };
