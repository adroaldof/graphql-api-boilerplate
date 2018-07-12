import handlers from '..';
import books from '../fake-data';

describe('book handler update', () => {
  it('expect to thrown error if id not found', () => {
    const payload = { title: 'updated title' };

    expect(() => handlers.update('notFoundId', payload)).toThrow();
  });

  it('expect crypto to be called', () => {
    const id = '1';
    const payload = { title: 'updated title' };

    const updated = handlers.update(id, payload);
    const foundBook = books.find(book => book.id === id);

    expect(updated).toEqual({ ...foundBook, ...payload });
  });
});
