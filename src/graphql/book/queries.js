import books from './fake-data';

const schema = `
  books: [Book!]!
  book (id: String!): Book!
`;

const resolvers = {
  books: () => books,
  book: (root, { id }) => books.find(book => book.id === id),
};

export default { schema, resolvers };
