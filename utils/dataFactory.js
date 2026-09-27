function uniqueEmail(prefix = 'playwright') {
  return `${prefix}.${Date.now()}@example.com`;
}

function uniqueEventName(prefix = 'Playwright Event') {
  return `${prefix} ${Date.now()}`;
}

module.exports = { uniqueEmail, uniqueEventName };
