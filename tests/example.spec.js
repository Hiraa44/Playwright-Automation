// @ts-check
import { test, expect } from '@playwright/test';



test.describe('GitHub User Search App', () => {
  
  test('has correct title', async ({ page }) => {
    await page.goto('https://gh-users-search.netlify.app/', { timeout: 30000 });
    await expect(page).toHaveTitle('Github User - Starter');
  });

  test('verifies title again (Assertion Test Case)', async ({ page }) => {
    await page.goto('https://gh-users-search.netlify.app/', { timeout: 30000 });
    await expect(page).toHaveTitle('Github User - Starter');
  });

  test('fills the username in the search bar', async ({ page }) => {
    await page.goto('https://gh-users-search.netlify.app/', { timeout: 60000 });

    // Using the data-testid selector (which you had right!)
    const searchInput = page.getByPlaceholder('enter github user name');
    await searchInput.fill('Hira Ali');

    // Assertion to confirm the input value was set correctly
    await expect(searchInput).toHaveValue('Hira Ali');
  });

});
