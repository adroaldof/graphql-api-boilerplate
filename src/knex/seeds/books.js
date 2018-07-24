const tableName = 'book';

const book = {
  title: "Harry Potter and the Sorcerer's stone",
  name: "Harry Potter and the Sorcerer's stone",
  author: 'J.K. Rowling',
};

// eslint-disable-next-line consistent-return
exports.seed = async knex => {
  const findQuery = await knex(tableName).where('title', book.title);

  if (!findQuery.length) {
    await knex(tableName).insert(book);
  }
};
