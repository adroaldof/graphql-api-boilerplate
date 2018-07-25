import { create, detail } from '../../repositories';

export default class User {
  static tableName = 'user';

  static async create(payload) {
    return create(this.tableName, payload);
  }

  static async me(id) {
    return detail(this.tableName, id);
  }
}
