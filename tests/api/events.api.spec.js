const { test, expect } = require('../../fixtures/customFixtures');

test.describe('Events API authorization', () => {
  test('@smoke events require authentication', async ({ eventsApi }) => {
    const response = await eventsApi.list();

    expect(response.status()).toBe(401);
  });
});
