import Auth from './Auth';

const schema = `
  login (email: String!, password: String!): User!
  logout: Boolean!
`;

const resolvers = {
  login: async (root, params, context) => Auth.login(params, context),
  logout: (root, params, context) => Auth.logout(context),
};

export default {
  schema,
  resolvers,
};
