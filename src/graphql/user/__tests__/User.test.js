import User from '../User';
import { create, detail } from '../../../repositories';

jest.mock('../../../repositories');

describe('User', () => {
  it('should call me', async () => {
    const id = '123';

    await User.me(id);

    expect(detail).toBeCalledWith(User.tableName, id);
  });

  it('should call create', async () => {
    const payload = {
      name: 'Fake Name',
      email: 'fake@email.io',
      password: 'fakePassword',
    };

    await User.create(payload);

    expect(create).toBeCalledWith(User.tableName, payload);
  });
});
