import mutations from '../mutations';
import queries from '../queries';
import types from '../types';
import user from '..';

describe('graphql.user', () => {
  it('Exports the types and the resolvers', () => {
    expect(user).toEqual({
      mutations,
      queries,
      types,
    });
  });
});
