const { test, expect } = require('../../fixtures/customFixtures');
const { config } = require('../../config/environment');
const { DashboardPage } = require('../../pages/DashboardPage');
const { EventsPage } = require('../../pages/EventsPage');
const { EventDetailsPage } = require('../../pages/EventDetailsPage');

test.describe('Authenticated EventHub workflow', () => {
  test.beforeEach(async () => {
    test.skip(!config.email || !config.password, 'Set E2E_EMAIL and E2E_PASSWORD to run authenticated UI coverage.');
  });

  test('@smoke user can sign in and browse events without booking', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.signInAs(config.email, config.password);

    const dashboard = new DashboardPage(page);
    await expect(dashboard.userEmail).toHaveText(config.email);
    await dashboard.openEvents();

    const events = new EventsPage(page);
    await expect(events.heading).toBeVisible();
    await expect(events.bookNowLinks).toHaveCount(3);
  });

  test('@regression user can open an event booking form safely', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.signInAs(config.email, config.password);

    const events = new EventsPage(page);
    await events.open();
    await events.openFirstEvent();

    const eventDetails = new EventDetailsPage(page);
    await expect(eventDetails.bookTicketsHeading).toBeVisible();
    await expect(eventDetails.confirmBooking).toBeVisible();
    await expect(eventDetails.incrementQuantity).toBeVisible();
  });
});