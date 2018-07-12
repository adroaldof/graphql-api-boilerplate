import express, { mockExpress } from 'express';
import { ApolloEngine } from 'apollo-engine';
import { graphqlExpress, graphiqlExpress, mockGraphqlExpress, mockGraphiqlExpress } from 'apollo-server-express';
import { mockBodyParserJson, mockBodyParserJsonInstance } from 'body-parser';

import api from '..';
import schemas from '../../graphql/schemas';

describe('express server', () => {
  const mockedConfig = { port: 3333, apolloEngineKey: 'fakeApolloEngineKey' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('expect to call express module', async () => {
    await api(mockedConfig);
    expect(express).toHaveBeenCalled();
  });

  it('expect to throw if some error', async () => {
    mockExpress.use.mockImplementationOnce(() => {
      throw new Error();
    });
    await expect(api(mockedConfig)).rejects.toThrow();
  });

  it('expect to use body parser middleware', async () => {
    await api(mockedConfig);
    expect(mockBodyParserJson).toHaveBeenCalled();
    expect(mockExpress.use).toHaveBeenCalledWith(mockBodyParserJsonInstance);
  });

  it('expect to use graphql express middleware on route /graphql', async () => {
    await api(mockedConfig);
    expect(graphqlExpress.mock.calls[0][0]).toEqual({ schema: schemas, tracing: true, cacheControl: true });
    expect(mockExpress.use).toHaveBeenCalledWith('/graphql', mockGraphqlExpress);
  });

  it('expect graphiql express middleware on route /graphiql', async () => {
    await api(mockedConfig);
    expect(graphiqlExpress).toHaveBeenCalledWith({ endpointURL: '/graphql' });
    expect(mockExpress.use).toHaveBeenCalledWith('/graphiql', mockGraphiqlExpress);
  });

  it('expect to throws if api listen fails', async () => {
    const { apolloEngineKey, ...configWithoutApolloEngineKey } = mockedConfig;
    mockExpress.listen.mockImplementationOnce((port, callback) => callback(new Error()));
    await expect(api(configWithoutApolloEngineKey)).rejects.toThrow();
  });

  it('expect to not use apollo engine if api key is not sent', async () => {
    const { apolloEngineKey, ...configWithoutApolloEngineKey } = mockedConfig;
    await api(configWithoutApolloEngineKey);
    expect(ApolloEngine).not.toHaveBeenCalled();
  });

  it('expect to throws if apollo engine listen fails', async () => {
    ApolloEngine.prototype.listen.mockImplementationOnce((options, callback) => callback(new Error()));
    await expect(api(mockedConfig)).rejects.toThrow();
    expect(ApolloEngine.mock.instances[0].listen).toHaveBeenCalledWith(
      {
        port: mockedConfig.port,
        expressApp: mockExpress,
      },
      expect.any(Function),
    );
  });

  it('expect to use apollo engine if api key is supplied', async () => {
    await api(mockedConfig);
    expect(ApolloEngine).toHaveBeenCalledWith({ apiKey: mockedConfig.apolloEngineKey });
  });
});
