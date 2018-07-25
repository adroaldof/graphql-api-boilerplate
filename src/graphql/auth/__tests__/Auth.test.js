import Auth from '../Auth';
import { login, logout } from '../../../auth';

jest.mock('../../../auth');

describe('Auth', () => {
  it('should call login', async () => {
    const context = {};
    const payload = {
      email: 'fake@email.io',
      password: 'fakePassword',
    };

    await Auth.login(payload, context);

    expect(login).toBeCalledWith(payload, context);
  });

  it('should call logout', async () => {
    const context = {};
    Auth.logout(context);

    expect(logout).toBeCalledWith(context);
  });
});
