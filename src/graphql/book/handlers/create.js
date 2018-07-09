const books = require('../fake-data');
const crypto = require('crypto');

async function create(payload) {
  const id = await crypto.randomBytes(20).toString('hex');
  const book = { ...payload, id };
  books.push(book);

  return book;
}

module.exports = create;
