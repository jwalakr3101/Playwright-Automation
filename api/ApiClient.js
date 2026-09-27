class ApiClient {
  constructor(request, baseUrl, token = '') {
    this.request = request;
    this.baseUrl = baseUrl.replace(/\/$/, '');
    this.token = token;
  }

  headers() {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  get(path, options = {}) {
    return this.request.get(`${this.baseUrl}${path}`, {
      ...options,
      headers: { ...this.headers(), ...options.headers }
    });
  }

  post(path, data, options = {}) {
    return this.request.post(`${this.baseUrl}${path}`, {
      ...options,
      data,
      headers: { ...this.headers(), ...options.headers }
    });
  }

  put(path, data, options = {}) {
    return this.request.put(`${this.baseUrl}${path}`, {
      ...options,
      data,
      headers: { ...this.headers(), ...options.headers }
    });
  }

  delete(path, options = {}) {
    return this.request.delete(`${this.baseUrl}${path}`, {
      ...options,
      headers: { ...this.headers(), ...options.headers }
    });
  }
}

module.exports = { ApiClient };
