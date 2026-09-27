const { test, expect } = require('../../fixtures/customFixtures');
const { DashboardPage } = require('../../pages/DashboardPage');

test.describe('Public EventHub experience', () => {
  test('@smoke shows the product entry point and API documentation link', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.open();

    await expect(dashboard.brandHeading).toBeVisible();
    await expect(dashboard.apiDocumentation).toBeVisible();
    await expect(dashboard.register).toBeVisible();
  });
});
