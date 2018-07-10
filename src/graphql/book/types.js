import gql from 'graphql-tag';

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

export default [Book, BookInput, BookUpdateInput];
