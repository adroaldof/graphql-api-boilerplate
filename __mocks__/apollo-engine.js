export const ApolloEngine = jest.fn();
ApolloEngine.prototype.listen = jest.fn((options, callback) => callback());
export default { ApolloEngine };
