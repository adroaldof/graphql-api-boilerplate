import jwt from 'jsonwebtoken';

import deserialize from '../deserialize';
import config from '../../config';

jest.mock('jsonwebtoken');

describe('core.authentication.deserialize', () => {
  const user = { email: 'fake@email.io', password: 'fakePassword' };
  const done = jest.fn();

  it('should call jwt.verify with the right params', async () => {
    await deserialize(user, done);
    expect(jwt.verify).toBeCalledWith(user, config.secret);
  });

  it('calls done with error', async () => {
    const error = new Error('An Error');
    jwt.verify.mockImplementationOnce(() => {
      throw error;
    });

    const token = 'fakeToken';
    await deserialize(token, done);
    expect(done).toHaveBeenCalledWith(error);
  });
});
