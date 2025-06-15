// @ts-check
import { test, expect } from '@playwright/test';


test('has title', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://gh-users-search.netlify.app/',{ timeout: 600000 });
  await expect(page).toHaveTitle('Github User - Starter', {timeout : 500000 });
  await browser.close();
});
 test ('Assertion Test Case', async ({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://gh-users-search.netlify.app/,', { timeout : 600000  });
  await expect(page).toHaveTitle('Github User - Starter', { timeout : 500000 });
  await browser.close();

 });