import authenticate from './authenticate';

export default async function login({ email, password }, req) {
  req.body.email = email;
  req.body.password = password;

  const user = await authenticate(req);

  return user;
}
