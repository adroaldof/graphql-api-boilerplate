import LocalStrategy from '../LocalStrategy';
import { list } from '../../repositories';

jest.mock('../../repositories');

describe('core.LocalStrategy.constructor', () => {
  it('should be named local', async () => {
    const strategy = new LocalStrategy();
    expect(strategy.name).toEqual('local');
  });
});

describe('core.LocalStrategy.authenticate', () => {
  const strategy = new LocalStrategy();
  const req = { body: {} };

  it('should return authentication success', async () => {
    const user = {
      name: 'Fake user',
      email: 'fake@email.io',
      password: 'fakePassword',
    };

    list.mockReturnValueOnce(Promise.resolve([user]));
    await strategy.authenticate(req);
    expect(strategy.success).toHaveBeenCalledWith(user);
  });

  it('should return authentication fail', async () => {
    const error = new Error('Some Error');

    list.mockReturnValueOnce(Promise.reject(error));
    await strategy.authenticate(req);
    expect(strategy.fail).toHaveBeenCalledWith(error);
  });
});
