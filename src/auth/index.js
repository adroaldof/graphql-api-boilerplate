import passport from 'passport';

import serialize from './serialize';
import deserialize from './deserialize';
import LocalStrategy from './LocalStrategy';

export { default as login } from './login';
export { default as logout } from './logout';

passport.use(new LocalStrategy());
passport.serializeUser(serialize);
passport.deserializeUser(deserialize);

export default {
  initialize: (...args) => passport.initialize(...args),
};
