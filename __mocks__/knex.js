export const transaction = {
  rollback: jest.fn(),
  commit: jest.fn().mockImplementation(item => item),
};

const insert = jest.fn().mockReturnValue({
  returning: jest.fn().mockReturnValue([]),
});

const limit = jest.fn().mockReturnValue({});

const where = jest.fn().mockReturnValue({
  first: jest.fn().mockReturnValue({}),
  del: jest.fn().mockReturnValue({}),
  limit,
});

const transacting = jest.fn().mockReturnValue({
  insert,
  where,
  whereIn: jest.fn().mockReturnValue({}),
});

const update = jest.fn().mockReturnValue({
  where: jest.fn().mockReturnValue({}),
});

const knexMethods = {
  insert,
  limit,
  where,
  transacting,
  update,
};

const knex = jest.fn(() => knexMethods);
knex.transaction = jest.fn(callback => callback(transaction));

export default jest.fn().mockReturnValue(knex);
