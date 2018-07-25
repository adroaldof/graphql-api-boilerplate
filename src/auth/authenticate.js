import passport from 'passport';

export default function authenticate(req) {
  return new Promise((resolve, reject) =>
    passport.authenticate('local', (error, user) => {
      if (error) {
        return reject(new Error('invalid-credentials'));
      }

      return resolve(user);
    })(req),
  );
}
