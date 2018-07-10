const books = require('../fake-data');

function update(id, payload) {
  const index = books.findIndex(book => book.id === id);

  if (index < 0) {
    throw new Error(`Object with id (${id}) not found`);
  }

  books[index] = { ...books[index], ...payload };
  return books;
}

module.exports = update;
