// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 15000,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    // the practice app is a local file - no internet needed
    baseURL: 'file://' + path.join(__dirname, 'app', 'index.html'),
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
