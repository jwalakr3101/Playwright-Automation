class DashboardPage {
  constructor(page) {
    this.page = page;
    this.brandHeading = page.getByRole('heading', { name: /eventhub/i }).first();
    this.apiDocumentation = page.getByRole('link', { name: /api documentation/i });
    this.register = page.getByRole('link', { name: /register/i });
    this.eventsNavigation = page.getByTestId('nav-events');//nav-events
    this.bookingsNavigation = page.getByTestId('nav-bookings');
    this.userEmail = page.getByTestId('user-email-display');
    this.logout = page.getByTestId('logout-btn');
  }

  async open() {
    await this.page.goto('/');
  }

  async openEvents() {
    await this.eventsNavigation.click();
  }
}

module.exports = { DashboardPage };
