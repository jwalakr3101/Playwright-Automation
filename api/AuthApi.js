class AuthApi {
  constructor(client) {
    this.client = client;
  }

  login(credentials) {
    return this.client.post('/api/auth/login', credentials);
  }

  register(user) {
    return this.client.post('/api/auth/register', user);
  }

  me() {
    return this.client.get('/api/auth/me');
  }
}

module.exports = { AuthApi };
