const { test, expect } = require('@playwright/test');

// The SAME input found five ways - Day 7 locator practice
test('five ways to find the email field', async ({ page }) => {
  await page.goto('');

  // 1. by label            <- the most readable, prefer this
  await expect(page.getByLabel('Email')).toBeVisible();

  // 2. by placeholder
  await expect(page.getByPlaceholder('you@example.com')).toBeVisible();

  // 3. by id (CSS)
  await expect(page.locator('#email')).toBeVisible();

  // 4. by XPath on the attribute
  await expect(page.locator("xpath=//input[@id='email']")).toBeVisible();

  // 5. by XPath from the label, using an axis   <- the fallback for messy DOMs
  await expect(
    page.locator("xpath=//label[normalize-space()='Email']/following-sibling::input[1]")
  ).toBeVisible();
});
