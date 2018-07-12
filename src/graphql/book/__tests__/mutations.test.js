import handlers from '../handlers';
import mutations from '../mutations';

jest.mock('../handlers');

describe('graphql book mutations', () => {
  const root = {};

  it('should call create a book', () => {
    const input = {
      title: 'Game of Thrones',
      author: 'George R. R. Martin',
    };

    mutations.resolvers.createBook(root, { input });
    expect(handlers.create).toBeCalledWith(input);
  });

  it('should call update a book', () => {
    const id = '1';
    const input = { author: 'Daenerys Targaryen' };

    mutations.resolvers.updateBook(root, { id, input });
    expect(handlers.update).toBeCalledWith(id, input);
  });
});
