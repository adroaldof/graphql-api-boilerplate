import crypto from 'crypto';

import books from './fake-data';

async function create(payload) {
  const id = await crypto.randomBytes(20).toString('hex');
  const book = { ...payload, id };
  books.push(book);

  return book;
}

module.exports = create;
