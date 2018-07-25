import jwt from 'jsonwebtoken';

import config from '../config';

export default async function deserialize(user, done) {
  try {
    const token = await jwt.verify(user, config.secret);
    return done(null, token);
  } catch (error) {
    return done(error);
  }
}
