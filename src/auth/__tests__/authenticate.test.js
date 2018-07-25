import passport from 'passport';
import authenticate from '../authenticate';

jest.mock('passport');

describe('core.authentication.authenticate', () => {
  const email = 'fake@email.io';
  const password = 'fakePassword';
  const body = { email, password };
  const req = { body };

  it('should calls passport.authenticate with the right params', async () => {
    await authenticate(req);
    await expect(passport.authenticate).toHaveBeenCalledWith('local', expect.any(Function));
  });

  it('should throws an error if authenticate returns an error', async () => {
    passport.authenticate.mockCallbackArgumentsOnce(true);
    await expect(authenticate(req)).rejects.toThrow('invalid-credentials');
  });
});
