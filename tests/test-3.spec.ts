import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:7003/admin/accounts');
  await page.getByRole('button', { name: ' Add an account' }).click();
  await page.getByPlaceholder('Name of the person, for').fill('MS APp');
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('Email address or phone number').click();
  await page.getByPlaceholder('Email address or phone number').fill('beckonpraveen@superopsinc1.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('Castigate@31');
  await page.locator('#i0118').press('Enter');
  await page.getByRole('button', { name: 'Yes' }).click();
});