const { test, expect } = require('../../fixtures/customFixtures');

test.describe('Health and configuration API', () => {
  test('@smoke health endpoint is available', async ({ healthApi }) => {
    const response = await healthApi.check();

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toBeTruthy();
  });

  test('@smoke public configuration is available', async ({ healthApi }) => {
    const response = await healthApi.config();

    expect(response.status()).toBe(200);
    expect(await response.json()).toBeTruthy();
  });
});
