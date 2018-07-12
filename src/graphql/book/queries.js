import handlers from './handlers';

const schema = `
  books: [Book!]!
  book (id: String!): Book!
`;

const resolvers = {
  books: () => handlers.list(),
  book: (root, { id }) => handlers.detail(id),
};

export default { schema, resolvers };
