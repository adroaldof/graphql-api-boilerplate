import books from './fake-data';

function update(id, payload) {
  const index = books.findIndex(book => book.id === id);

  if (index < 0) {
    throw new Error({ error: 'not-found', info: id });
  }

  const book = { ...books[index], ...payload };
  books[index] = book;
  return book;
}

export default update;
