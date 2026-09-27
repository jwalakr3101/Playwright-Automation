const { test, expect } = require('../../fixtures/customFixtures');

test.describe('Bookings API authorization', () => {
  test('@smoke bookings require authentication', async ({ bookingsApi }) => {
    const response = await bookingsApi.list();

    expect(response.status()).toBe(401);
  });
});
