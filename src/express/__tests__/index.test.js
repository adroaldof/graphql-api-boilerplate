import express, { mockExpress } from 'express';
import { graphqlExpress, graphiqlExpress, mockGraphqlExpress, mockGraphiqlExpress } from 'apollo-server-express';
import { mockBodyParserJson, mockBodyParserJsonInstance } from 'body-parser';

import app from '..';
import schemas from '../../graphql/schemas';

describe('express server', () => {
  const mockedConfig = { port: 3333 };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('expect to call express module', async () => {
    await app(mockedConfig);
    expect(express).toHaveBeenCalled();
  });

  it('expect to throw if some error', async () => {
    mockExpress.use.mockImplementationOnce(() => {
      throw new Error();
    });
    await expect(app(mockedConfig)).rejects.toThrow();
  });

  it('expect to use body parser middleware', async () => {
    await app(mockedConfig);
    expect(mockBodyParserJson).toHaveBeenCalled();
    expect(mockExpress.use).toHaveBeenCalledWith(mockBodyParserJsonInstance);
  });

  it('expect to use graphql express middleware on route /graphql', async () => {
    await app(mockedConfig);
    expect(graphqlExpress.mock.calls[0][0]).toEqual({ schema: schemas });
    expect(mockExpress.use).toHaveBeenCalledWith('/graphql', mockGraphqlExpress);
  });

  it('expect graphiql express middleware on route /graphiql', async () => {
    await app(mockedConfig);
    expect(graphiqlExpress).toHaveBeenCalledWith({ endpointURL: '/graphql' });
    expect(mockExpress.use).toHaveBeenCalledWith('/graphiql', mockGraphiqlExpress);
  });

  it('expect to throws if some error were found', async () => {
    mockExpress.listen.mockImplementationOnce((port, callback) => callback(new Error()));
    await expect(app(mockedConfig)).rejects.toThrow();
  });
});
