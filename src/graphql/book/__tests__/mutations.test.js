import Book from '../Book';
import mutations from '../mutations';

jest.mock('../Book');

describe('graphql book mutations', () => {
  const root = {};

  it('should call create a book', () => {
    const input = {
      title: 'Game of Thrones',
      author: 'George R. R. Martin',
    };

    mutations.resolvers.createBook(root, { input });
    expect(Book.create).toBeCalledWith(input);
  });

  it('should call update a book', () => {
    const id = '1';
    const input = { author: 'Daenerys Targaryen' };

    mutations.resolvers.updateBook(root, { id, input });
    expect(Book.update).toBeCalledWith(id, input);
  });

  it('should call remove a book', () => {
    const id = '1';

    mutations.resolvers.removeBook(root, { id });
    expect(Book.remove).toBeCalledWith(id);
  });
});
