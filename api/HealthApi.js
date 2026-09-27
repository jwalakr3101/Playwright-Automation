class HealthApi {
  constructor(client) {
    this.client = client;
  }

  check() {
    return this.client.get('/api/health');
  }

  config() {
    return this.client.get('/api/config');
  }
}

module.exports = { HealthApi };
