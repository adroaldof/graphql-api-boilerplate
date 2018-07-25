export const Strategy = jest.fn();

Strategy.prototype.success = jest.fn();
Strategy.prototype.fail = jest.fn();

export default {
  Strategy,
};
