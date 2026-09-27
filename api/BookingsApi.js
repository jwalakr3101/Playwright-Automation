class BookingsApi {
  constructor(client) {
    this.client = client;
  }

  list(options = {}) {
    return this.client.get('/api/bookings', options);
  }

  create(booking) {
    return this.client.post('/api/bookings', booking);
  }

  getById(id) {
    return this.client.get(`/api/bookings/${id}`);
  }

  getByReference(reference) {
    return this.client.get(`/api/bookings/ref/${encodeURIComponent(reference)}`);
  }

  cancel(id) {
    return this.client.delete(`/api/bookings/${id}`);
  }
}

module.exports = { BookingsApi };
