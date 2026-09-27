const { test, expect } = require('../../fixtures/customFixtures');
const users = require('../../test-data/users.json');

test.describe('Authentication API', () => {
  test('@regression invalid credentials are rejected', async ({ authApi }) => {
    const response = await authApi.login(users.invalidUser);

    expect([400, 401, 422]).toContain(response.status());
  });
});
