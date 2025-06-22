// @ts-check
import { test, expect } from '@playwright/test';
import { inputObjects } from '../pageObjects/inputobjects';


test.describe('GitHub User Search App', () => {
  
  test('has correct title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    const input  = page.locator('input[name="user-name"]');
    await expect(input).toBeVisible({ timeout: 100000 });
   await expect(input).toBeEnabled();
   await input.fill('username');
   await page.pause();
    
   
   
  });
  

 
  

});
