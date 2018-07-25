import gql from 'graphql-tag';

export const User = gql`
  type User {
    id: ID!
    name: String
    email: String!
    phone: String
  }
`;

export const UserInput = gql`
  input UserInput {
    name: String
    email: String!
    password: String!
    phone: String
  }
`;

export default [User, UserInput];
