import handlers from '..';
import books from '../fake-data';

describe('book handler detail', () => {
  it('expect to thrown error if id not found', () => {
    const id = 'notFoundId';

    expect(() => handlers.detail(id)).toThrow();
  });

  it('expect to find a book', () => {
    const id = '1';

    const found = handlers.detail(id);
    const foundBook = books.find(book => book.id === id);

    expect(found).toEqual(foundBook);
  });
});
