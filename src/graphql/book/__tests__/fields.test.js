import fields from '../fields';

describe('graphql.Book.fields.resolvers', () => {
  it('should have a resolvers', () => {
    const { resolvers } = fields;

    expect(resolvers).not.toBeUndefined();
  });

  it('should have a resolvers.Book', () => {
    const {
      resolvers: { Book },
    } = fields;

    expect(Book).not.toBeUndefined();
  });

  it('should have a resolvers.Book.fields', () => {
    const {
      resolvers: { Book },
    } = fields;

    expect(Book.name).not.toBeUndefined();
  });

  it('should have resolve name with title', () => {
    const book = { title: 'some awesome title', author: 'fabulous author' };
    const expectedResult = fields.resolvers.Book.name(book);
    expect(expectedResult).toEqual(book.title);
  });
});
