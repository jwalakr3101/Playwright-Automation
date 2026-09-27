# EventHub Playwright Automation

Maintainable JavaScript Playwright automation for the live EventHub ticket-booking UI and REST API.

## Principles

- API clients own endpoint paths and HTTP mechanics.
- Page objects own UI behavior; specs contain intent and assertions.
- Fixtures centralize browser pages, API clients, and authenticated setup.
- Public tests are safe to run against the shared environment.
- Data mutation is opt-in and should use a dedicated automation account.
- Credentials are supplied through environment variables and never committed.

## Setup

```powershell
npm install
npx playwright install chromium
Copy-Item .env.example .env
```

Set `E2E_EMAIL` and `E2E_PASSWORD` in `.env` for authenticated coverage. Use a dedicated test account. Authenticated tests are skipped when credentials are absent.

## Run

```powershell
npm test
npm run test:ui
npm run test:api
npm run test:smoke
npm run test:regression
npm run test:headed
npm run report
```

Select an environment with `TEST_ENV=qa`, `TEST_ENV=dev`, or `TEST_ENV=staging`. The profiles currently point to the supplied EventHub environments and can be changed without editing tests.

## Structure

- `api`: domain API clients and shared HTTP client
- `pages`: page objects for the UI
- `fixtures`: reusable Playwright fixtures
- `tests/ui`: browser tests
- `tests/api`: contract and authorization tests
- `config`: environment profiles and config loading
- `test-data`: stable JSON data
- `utils`: assertions, date helpers, and unique-data factories
- `auth`: reserved for generated storage state; never commit credentials
- `reports`: generated reports, ignored by Git

The current EventHub public surface starts at the sign-in page. Event and booking operations are protected by bearer authentication, so mutation coverage should be added only after a dedicated account and teardown policy are configured.
