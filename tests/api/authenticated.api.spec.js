const { test, expect } = require('../../fixtures/customFixtures');
const { config } = require('../../config/environment');

test.describe('Authenticated API', () => {
  test.beforeEach(async () => {
    test.skip(!config.email || !config.password, 'Set E2E_EMAIL and E2E_PASSWORD to run authenticated coverage.');
  });

  test('@regression authenticated user can access profile', async ({ authenticatedApiClient }) => {
    const response = await authenticatedApiClient.get('/api/auth/me');

    expect(response.status()).toBe(200);
    expect(await response.json()).toBeTruthy();
  });

  test('@regression authenticated user can list events', async ({ authenticatedApiClient }) => {
    const response = await authenticatedApiClient.get('/api/events');

    expect(response.status()).toBe(200);
    expect(await response.json()).toBeTruthy();
  });
});
