import Book from './Book';

const schema = `
  books: [Book!]!
  book (id: String!): Book!
`;

const resolvers = {
  books: async () => Book.list(),
  book: async (root, { id }) => Book.detail(id),
};

export default { schema, resolvers };
