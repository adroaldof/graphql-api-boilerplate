import { list } from '..';

describe.skip('test list query', () => {
  it('should thrown error if not table or payload are missing', async () => {
    await expect(list()).rejects.toThrow();
  });
});
