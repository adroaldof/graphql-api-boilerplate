export const mockExpress = {
  use: jest.fn(),
  enable: jest.fn(),
  listen: jest.fn((port, callback) => callback()),
};
export default jest.fn().mockReturnValue(mockExpress);
