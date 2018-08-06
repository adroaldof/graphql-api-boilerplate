import { create, detail, list, remove, update } from '../../repositories';

export default class Book {
  static tableName = 'book';

  static async list() {
    return list(this.tableName);
  }

  static async detail(id) {
    return detail(this.tableName, id);
  }

  static async create(payload) {
    return create(this.tableName, payload);
  }

  static async update(id, payload) {
    return update(this.tableName, id, payload);
  }

  static async remove(id) {
    return remove(this.tableName, id);
  }
}
