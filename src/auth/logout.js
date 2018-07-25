export default function logout(req) {
  return req.logout() || true;
}
