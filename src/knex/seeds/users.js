const tableName = 'user';

const user = {
  name: 'Dev System',
  email: 'dev@dev.com',
  password: 'fakePassword',
};

// eslint-disable-next-line consistent-return
exports.seed = async knex => {
  const findQuery = await knex(tableName).where('email', user.email);

  if (!findQuery.length) {
    await knex(tableName).insert(user);
  }
};
