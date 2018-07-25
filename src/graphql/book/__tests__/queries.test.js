import Book from '../Book';
import queries from '../queries';

jest.mock('../Book');

describe('graphql book queries', () => {
  it('call list resolver', async () => {
    await queries.resolvers.books();
    await expect(Book.list).toBeCalled();
  });

  it('call detail resolver', async () => {
    const root = {};
    const id = '1';

    await queries.resolvers.book(root, { id });
    await expect(Book.detail).toHaveBeenCalledWith(id);
  });
});
