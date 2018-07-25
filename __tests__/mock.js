export default {
  asyncFn(implementation, options = {}) {
    const mock = jest.fn(function asyncFn(...args) {
      const promise = Promise.resolve(implementation ? implementation.call(this, ...args) : undefined);
      Object.keys(options).forEach(key => {
        promise[key] = options[key];
      });
      return promise;
    });
    mock.mockResolveValueOnce = value => mock.mockReturnValueOnce(Promise.resolve(value));
    mock.mockRejectValueOnce = value => mock.mockReturnValueOnce(Promise.reject(value));
    return mock;
  },
  callbackFn() {
    const argumentsStack = [];
    const mock = jest.fn(...args => args[args.length - 1].apply(null, argumentsStack.pop()));
    mock.mockCallbackArgumentsOnce = (...args) => argumentsStack.push(args);
    return mock;
  },
};
