const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test('TC-01 login with valid credentials', async ({ page }) => {
  await page.getByLabel('Email').fill('ada@loopcamp.az');
  await page.getByLabel('Password').fill('loopcamp123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.locator('#welcome')).toHaveText('Welcome, ada@loopcamp.az');
  await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
});

test('TC-02 wrong password shows an error', async ({ page }) => {
  await page.getByLabel('Email').fill('ada@loopcamp.az');
  await page.getByLabel('Password').fill('wrong-one');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.locator('#error')).toHaveText('Wrong email or password');
  await expect(page.locator('#welcome')).toBeHidden();
});

test('TC-03 empty fields are rejected', async ({ page }) => {
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#error')).toHaveText('Email and password are required');
});

test('TC-04 invalid email format is rejected', async ({ page }) => {
  await page.getByLabel('Email').fill('not-an-email');
  await page.getByLabel('Password').fill('loopcamp123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#error')).toHaveText('Please enter a valid email');
});

test('TC-05 logout returns to the login form', async ({ page }) => {
  await page.getByLabel('Email').fill('ada@loopcamp.az');
  await page.getByLabel('Password').fill('loopcamp123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();

  await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
  await expect(page.getByLabel('Email')).toHaveValue('');
});
