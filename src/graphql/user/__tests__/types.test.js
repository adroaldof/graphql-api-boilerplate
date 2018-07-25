import types, { User, UserInput } from '../types';
import mapTypeToTestableObject from '../../__tests__/map-schema-to-object';

describe('graphql.user.types.User', () => {
  const object = mapTypeToTestableObject(User);

  it('Is named User', () => {
    expect(object.name).toEqual('User');
  });

  it('Has the right values', () => {
    expect(object.fields).toEqual({
      id: 'ID!',
      name: 'String',
      email: 'String!',
      phone: 'String',
    });
  });
});

describe('graphql.user.types.UserInput', () => {
  const object = mapTypeToTestableObject(UserInput);

  it('Is named UserInput', () => {
    expect(object.name).toEqual('UserInput');
  });

  it('Has the right values', () => {
    expect(object.fields).toEqual({
      name: 'String',
      email: 'String!',
      password: 'String!',
      phone: 'String',
    });
  });
});

describe('graphql.user.types', () => {
  it('Exports all the user types', () => {
    expect(types).toEqual([User, UserInput]);
  });
});
