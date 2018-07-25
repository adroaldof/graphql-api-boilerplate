import User from './User';

const schema = `
  me: User!
`;

const resolvers = {
  me: (root, params, { user: { id } }) => User.me(id),
};

export default {
  schema,
  resolvers,
};
