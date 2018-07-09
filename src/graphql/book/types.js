const gql = require('graphql-tag');

const Book = gql`
  type Book {
    id: String!
    title: String
    author: String
  }
`;

const BookInput = gql`
  input BookInput {
    title: String!
    author: String!
  }
`;

const BookUpdateInput = gql`
  input BookUpdateInput {
    title: String
    author: String
  }
`;

module.exports = [Book, BookInput, BookUpdateInput];
