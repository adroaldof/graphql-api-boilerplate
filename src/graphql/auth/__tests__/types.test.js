import types, { LoginInput } from '../types';
import mapTypeToTestableObject from '../../__tests__/map-schema-to-object';

describe('graphql.auth.types.LoginInput', () => {
  const object = mapTypeToTestableObject(LoginInput);

  it('Is named LoginInput', () => {
    expect(object.name).toEqual('LoginInput');
  });

  it('Has the right values', () => {
    expect(object.fields).toEqual({
      email: 'String!',
      password: 'String!',
    });
  });
});

describe('graphql.user.types', () => {
  it('Exports all the user types', () => {
    expect(types).toEqual([LoginInput]);
  });
});
