const books = require('../fake-data');

function update(id, payload) {
  const index = books.findIndex(book => book.id === id);

  if (index < 0) {
    throw new Error(`Object with id (${id}) not found`);
  }

  return (books[index] = { ...books[index], ...payload });
}

module.exports = update;
