const path = require('node:path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const profile = process.env.TEST_ENV || 'qa';
const profileFile = path.resolve(process.cwd(), 'config', `${profile}.env`);
dotenv.config({ path: profileFile, override: false });

const config = Object.freeze({
  profile,
  uiBaseUrl: process.env.UI_BASE_URL || 'https://eventhub.rahulshettyacademy.com',
  apiBaseUrl: process.env.API_BASE_URL || 'https://api.eventhub.rahulshettyacademy.com',
  email: process.env.E2E_EMAIL || '',
  password: process.env.E2E_PASSWORD || '',
  allowDataMutation: process.env.ALLOW_DATA_MUTATION === 'true'
});

function requireCredentials() {
  if (!config.email || !config.password) {
    throw new Error('E2E_EMAIL and E2E_PASSWORD are required for authenticated tests.');
  }
}

module.exports = { config, requireCredentials };
