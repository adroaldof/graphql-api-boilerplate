import books from '..';
import mutations from '../mutations';
import queries from '../queries';
import types from '../types';

describe('graphql book types', () => {
  it('Exports the types and the mutations', () => {
    expect(books).toEqual({
      mutations,
      queries,
      types,
    });
  });
});
