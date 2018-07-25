import Book from '../Book';
import { create, detail, list, remove, update } from '../../../repositories';

jest.mock('../../../repositories');

describe('Book', () => {
  it('should call list', async () => {
    await Book.list();

    expect(list).toBeCalledWith(Book.tableName);
  });

  it('should call detail', async () => {
    const id = '123';

    await Book.detail(id);

    expect(detail).toBeCalledWith(Book.tableName, { id });
  });

  it('should call create', async () => {
    const payload = {
      title: 'new book title',
      author: 'new book author',
    };

    await Book.create(payload);

    expect(create).toBeCalledWith(Book.tableName, payload);
  });

  it('should call update', async () => {
    const id = '123';
    const payload = { title: 'fix title typo' };

    await Book.update(id, payload);

    expect(update).toBeCalledWith(Book.tableName, id, payload);
  });

  it('should call remove', async () => {
    const id = '123';

    await Book.remove(id);

    expect(remove).toBeCalledWith(Book.tableName, id);
  });
});
