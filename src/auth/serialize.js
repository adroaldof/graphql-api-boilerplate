import jwt from 'jsonwebtoken';

import config from '../config';

export default async function serialize(user, done) {
  try {
    const token = await jwt.sign(user, config.secret);
    return done(null, token);
  } catch (error) {
    return done(error);
  }
}
