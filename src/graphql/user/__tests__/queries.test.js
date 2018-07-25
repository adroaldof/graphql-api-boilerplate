import User from '../User';
import queries from '../queries';

jest.mock('../User');

describe('graphql.user.queries.resolvers.me', () => {
  const root = {};
  const params = {};

  it('Calls User.me', async () => {
    const id = '123';
    const context = { user: { id } };
    await queries.resolvers.me(root, params, context);
    expect(User.me).toBeCalledWith(id);
  });
});
