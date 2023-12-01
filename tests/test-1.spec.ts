import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:7003/admin/accounts');
  await page.getByRole('button', { name: ' Add an account' }).click();
  await page.getByPlaceholder('Name of the person, for').click();
  await page.getByPlaceholder('Name of the person, for').fill('test email');
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.getByRole('button', { name: ' Standard IMAP' }).click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('praveensuperops979@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('rivgprcaaaxxvnks');
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.getByRole('button', { name: ' Continue' }).click();
});