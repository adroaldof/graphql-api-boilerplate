import gql from 'graphql-tag';

export const Book = gql`
  type Book {
    id: String!
    title: String
    author: String
  }
`;

export const BookInput = gql`
  input BookInput {
    title: String!
    author: String!
  }
`;

export const BookUpdateInput = gql`
  input BookUpdateInput {
    title: String
    author: String
  }
`;

export default [Book, BookInput, BookUpdateInput];
