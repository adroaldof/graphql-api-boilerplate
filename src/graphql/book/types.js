const gql = require('graphql-tag');

const Book = gql`
  type Book {
    id: String!
    title: String
    author: String
  }
`;

module.exports = [Book];
