import books from '..';
import fields from '../fields';
import mutations from '../mutations';
import queries from '../queries';
import types from '../types';

describe('graphql book types', () => {
  it('Exports the types and the mutations', () => {
    expect(books).toEqual({
      fields,
      mutations,
      queries,
      types,
    });
  });
});
