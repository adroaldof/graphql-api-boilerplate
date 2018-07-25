import gql from 'graphql-tag';

export const LoginInput = gql`
  input LoginInput {
    email: String!
    password: String!
  }
`;

export default [LoginInput];
