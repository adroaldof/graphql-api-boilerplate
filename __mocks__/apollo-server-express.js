export const mockGraphqlExpress = jest.fn();
export const mockGraphiqlExpress = jest.fn();
export const graphqlExpress = jest.fn().mockReturnValue(mockGraphqlExpress);
export const graphiqlExpress = jest.fn().mockReturnValue(mockGraphiqlExpress);
