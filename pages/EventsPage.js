class EventsPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: /upcoming events/i });
    this.bookNowLinks = page.getByRole('link', { name: /book now/i });
  }

  async open() {
    await this.page.goto('/events');
  }

  async openFirstEvent() {
    await this.bookNowLinks.first().click();
  }
}

module.exports = { EventsPage };