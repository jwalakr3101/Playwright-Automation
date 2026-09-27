class EventDetailsPage {
  constructor(page) {
    this.page = page;
    this.bookTicketsHeading = page.getByRole('heading', { name: /book tickets/i });
    this.confirmBooking = page.getByRole('button', { name: /confirm booking/i });
    this.incrementQuantity = page.getByRole('button', { name: '+' });
    this.decrementQuantity = page.getByRole('button', { name: '−' });
  }
}

module.exports = { EventDetailsPage };