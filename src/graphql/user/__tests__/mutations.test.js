import User from '../User';
import mutations from '../mutations';

jest.mock('../User');

describe('graphql.user.mutations.resolvers', () => {
  const root = {};
  const params = { input: { name: 'Fake Name', email: 'fake@email.io', password: 'fakePassword' } };

  it('Calls user create', async () => {
    await mutations.resolvers.createUser(root, params);
    expect(User.create).toHaveBeenCalledWith(params.input);
  });
});
