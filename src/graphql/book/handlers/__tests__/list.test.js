import handlers from '..';
import books from '../fake-data';

describe('book handler list', () => {
  it('expect to list books', () => {
    expect(handlers.list()).toEqual(books);
  });
});
