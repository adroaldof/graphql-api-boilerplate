import { Strategy } from 'passport-strategy';

import { list } from '../repositories';

export default class LocalStrategy extends Strategy {
  constructor() {
    super();
    this.name = 'local';
  }

  async authenticate(req) {
    const {
      body: { email, password },
    } = req;

    try {
      const [user] = await list('user', { email, password });
      return this.success(user);
    } catch (error) {
      return this.fail(error);
    }
  }
}
