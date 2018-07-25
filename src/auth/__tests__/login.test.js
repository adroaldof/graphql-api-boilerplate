import login from '../login';
import authenticate from '../authenticate';

jest.mock('../authenticate');

describe('core.authentication.login', () => {
  const payload = { email: 'fake@email.com', password: 'password' };

  it('should return an user if credential passed are valid', async () => {
    const user = { ...payload };
    const req = { body: {} };

    authenticate.mockReturnValueOnce(Promise.resolve(user));
    await expect(login(payload, req)).resolves.toEqual(user);
  });
});
