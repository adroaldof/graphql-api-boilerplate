import { login, logout } from '../../auth';

export default class Auth {
  static async login(payload, context) {
    return login(payload, context);
  }

  static logout(context) {
    return logout(context);
  }
}
