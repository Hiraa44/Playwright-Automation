
import { test, expect,chromium } from '@playwright/test';
import { inputObjects } from '../pageObjects/inputobjects';
//import {HomePage}  from '../../TestObjects/HomePage';


 //const browser = await chromium.launch({ headless : false});
let page
test.beforeAll(async ({browser})=>{
  tag : "@beforExecution"
 //const browser = await chromium.launch({ headless : false});
  const context = await browser.newContext();
    page = await browser.newPage();
    
      await page.goto("https://www.saucedemo.com/v1/");

});
test.describe("Successful Login", ()=>{
  tag : '@Login Successful'
test('Filling User Name and Password', async ()=>
  {
  // await page.goto("https://www.saucedemo.com/v1/");
   page.setDefaultTimeout(10000); 
   const username =  await page.getByPlaceholder("Username").fill("standard_user");
   const password = await page.getByPlaceholder("Password").fill("secret_sauce");
   await page.locator('#login-button').click();
   //await browser.close();
  // await new Promise(() => {}); // prevents your script from exiting! 
  // browser.close();
});
test("Get Title and Assert things", async()=>{
 const title = await page.title();
 console.log(title);
 await expect(page).toHaveTitle('Swag Labs')
});
});

test.describe("Login Unsuccessful Test Cases", ()=>{
  tag : '@Login Unsuccessful'
 test("Validating wrong login text" ,async({page})=>{
   page.setDefaultTimeout(10000); 
  
    await page.goto("https://www.saucedemo.com/v1/")
    const username =  await page.getByPlaceholder("Username").fill("standard_user");
    const password = await page.getByPlaceholder("Password").fill("secret_sauce1");
    await page.locator('#login-button').click();
    const error_msg =  page.locator('[data-test="error"]');
    await expect(error_msg).toContainText("Epic sadface: Username and password do not match any user in this service")
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/");
});
});

test.afterAll(async({browser})=>{
 // await page.waitForTimeout(5000);
   browser.close();

});

