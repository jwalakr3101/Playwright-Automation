class EventsApi {
  constructor(client) {
    this.client = client;
  }

  list(options = {}) {
    return this.client.get('/api/events', options);
  }

  getById(id) {
    return this.client.get(`/api/events/${id}`);
  }

  create(event) {
    return this.client.post('/api/events', event);
  }

  update(id, event) {
    return this.client.put(`/api/events/${id}`, event);
  }

  remove(id) {
    return this.client.delete(`/api/events/${id}`);
  }
}

module.exports = { EventsApi };
