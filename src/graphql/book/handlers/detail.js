import books from './fake-data';

export default function detail(id) {
  const found = books.find(book => book.id === id);

  if (!found) {
    throw new Error({ error: 'not-found', info: id });
  }

  return found;
}
