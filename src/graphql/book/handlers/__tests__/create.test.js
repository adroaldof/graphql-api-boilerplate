import crypto from 'crypto';

import handlers from '..';

jest.mock('crypto');

describe('book handler create', () => {
  const id = 'mockedId';
  const fakeBook = {
    author: 'john wolverine logan',
    title: 'x-man',
  };

  beforeEach(() => {
    crypto.randomBytes.mockReturnValue({
      toString: jest.fn().mockReturnValue(id),
    });
  });

  it('expect crypto to be called', async () => {
    await handlers.create(fakeBook);

    expect(crypto.randomBytes).toBeCalled();
  });

  it('expect to create a book', async () => {
    const createdBook = await handlers.create(fakeBook);

    expect(createdBook).toEqual({ ...fakeBook, id });
  });
});
