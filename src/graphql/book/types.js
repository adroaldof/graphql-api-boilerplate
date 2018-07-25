import gql from 'graphql-tag';

export const Book = gql`
  type Book {
    id: String!
    title: String
    author: String
    name: String @deprecated(reason: "Use 'title' instead. Will be removed on version 2.0.0")
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
