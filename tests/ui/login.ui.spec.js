const { test, expect } = require('../../fixtures/customFixtures');

test.describe('Login page', () => {
  test('@smoke exposes accessible sign-in controls', async ({ loginPage }) => {
    await loginPage.open();

    await expect(loginPage.email).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await expect(loginPage.signIn).toBeVisible();
    await expect(loginPage.register).toBeVisible();
  });
});
