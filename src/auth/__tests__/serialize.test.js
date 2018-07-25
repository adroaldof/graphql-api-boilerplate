import jwt from 'jsonwebtoken';

import serialize from '../serialize';
import config from '../../config';

jest.mock('jsonwebtoken');

describe('core.authentication.serialize', () => {
  const user = { email: 'fake@email.com', password: 'password' };

  it('should call jwt.sign with the right params', async () => {
    await serialize(user, jest.fn());
    expect(jwt.sign).toBeCalledWith(user, config.secret);
  });

  it('calls done with error', async () => {
    const done = jest.fn();
    const error = new Error('An Error');
    jwt.sign.mockImplementationOnce(() => {
      throw error;
    });
    const token = 'someToken';
    await serialize(token, done);
    expect(done).toHaveBeenCalledWith(error);
  });
});
