import queries from '../queries';
import handlers from '../handlers';

jest.mock('../handlers');

describe('graphql book queries', () => {
  it('call list resolver', async () => {
    await queries.resolvers.books();
    await expect(handlers.list).toBeCalled();
  });

  it('call detail resolver', async () => {
    const root = {};
    const id = '1';

    await queries.resolvers.book(root, { id });
    await expect(handlers.detail).toHaveBeenCalledWith(id);
  });
});
