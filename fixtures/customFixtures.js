const base = require('@playwright/test');
const { config, requireCredentials } = require('../config/environment');
const { ApiClient } = require('../api/ApiClient');
const { AuthApi } = require('../api/AuthApi');
const { EventsApi } = require('../api/EventsApi');
const { BookingsApi } = require('../api/BookingsApi');
const { HealthApi } = require('../api/HealthApi');
const { LoginPage } = require('../pages/LoginPage');

const test = base.test.extend({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  apiClient: async ({ request }, use) => use(new ApiClient(request, config.apiBaseUrl)),
  authApi: async ({ apiClient }, use) => use(new AuthApi(apiClient)),
  eventsApi: async ({ apiClient }, use) => use(new EventsApi(apiClient)),
  bookingsApi: async ({ apiClient }, use) => use(new BookingsApi(apiClient)),
  healthApi: async ({ apiClient }, use) => use(new HealthApi(apiClient)),
  authenticatedApiClient: async ({ request }, use) => {
    requireCredentials();
    const client = new ApiClient(request, config.apiBaseUrl);
    const response = await new AuthApi(client).login({ email: config.email, password: config.password });
    if (!response.ok()) {
      throw new Error(`Authentication setup failed with status ${response.status()}.`);
    }
    const body = await response.json();
    const token = body.token || body.accessToken || body.data?.token || body.data?.accessToken;
    if (!token) {
      throw new Error('Authentication response did not contain a bearer token.');
    }
    await use(new ApiClient(request, config.apiBaseUrl, token));
  }
});

module.exports = { test, expect: base.expect };
