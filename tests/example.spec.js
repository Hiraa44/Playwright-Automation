// @ts-check
import { test, expect,chromium } from '@playwright/test';
import { inputObjects } from '../pageObjects/inputobjects';
//import {HomePage}  from '../../TestObjects/HomePage';


 //const browser = await chromium.launch({ headless : false});
let page
test.beforeAll(async ({browser})=>{
  tag : "@beforExecution"
//  const browser = await chromium.launch({ headless : false});

  const context = await browser.newContext();
    page = await browser.newPage();
    
      await page.goto("https://www.saucedemo.com/v1/");

});
 
test('Filling User Name and Password', async ()=>
  {
  // await page.goto("https://www.saucedemo.com/v1/");
   page.setDefaultTimeout(10000); 
   const username =  await page.getByPlaceholder("Username").fill("standard_user");
   const password = await page.getByPlaceholder("Password").fill("secret_sauce");
   await page.locator('#login-button').click();
   //await browser.close();
   await new Promise(() => {}); // prevents your script from exiting! 
  // browser.close();
});

test("Get Title and Assert things", async()=>{
 const title = await page.title();
 console.log(title);
 await expect(page).toHaveTitle('Swag Labs')
});

test.afterAll(async({browser})=>{
   browser.close();

});

