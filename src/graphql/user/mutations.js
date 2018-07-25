import User from './User';

const schema = `
  createUser (input: UserInput!): User!
`;

const resolvers = {
  createUser: async (root, { input }) => User.create(input),
};

export default {
  schema,
  resolvers,
};
