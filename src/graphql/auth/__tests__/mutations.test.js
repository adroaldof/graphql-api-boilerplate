import Auth from '../Auth';
import mutations from '../mutations';

jest.mock('../Auth');

describe('graphql.auth.mutations.resolvers.login', () => {
  it('Calls authentication.login with the right params', async () => {
    const root = {};
    const params = { email: 'fake@email.io', password: 'fakePassword' };
    const context = {};

    await mutations.resolvers.login(root, params, context);
    expect(Auth.login).toBeCalledWith(params, context);
  });
});

describe('graphql.auth.mutations.resolvers.logout', () => {
  it('Calls authentication.logout with the right params', () => {
    const root = {};
    const params = {};
    const context = { user: {} };

    mutations.resolvers.logout(root, params, context);
    expect(Auth.logout).toBeCalledWith(context);
  });
});
