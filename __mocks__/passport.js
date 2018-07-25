let authenticateCallbackArguments = [];

const authenticate = jest.fn((_, callback) =>
  jest.fn(() => {
    if (typeof callback === 'function') {
      callback.apply(this, authenticateCallbackArguments.shift() || [null, {}]);
    }
  }),
);

authenticate.mockCallbackArgumentsOnce = (error = null, user = {}) => {
  authenticateCallbackArguments.push([error, user]);
};

authenticate.clearMock = () => {
  authenticateCallbackArguments = [];
};

export default {
  authenticate,
  use: jest.fn(),
  serializeUser: jest.fn(),
  deserializeUser: jest.fn(),
  initialize: jest.fn(),
};
