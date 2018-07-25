import auth from '..';
import mutations from '../mutations';
import types from '../types';

describe('graphql.auth', () => {
  it('Exports the types and the resolvers', () => {
    expect(auth).toEqual({
      mutations,
      types,
    });
  });
});
