import logout from '../logout';

describe('core.authentication.logout', () => {
  const req = {
    logout: jest.fn(),
  };

  it('Calls req.logout', () => {
    logout(req);
    expect(req.logout).toHaveBeenCalled();
  });

  it('Returns true', () => {
    expect(logout(req)).toBe(true);
  });
});
