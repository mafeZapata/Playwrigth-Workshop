 const { test } = require ('@playwright/test');


 test('Browser context playwright test', async ({browser}) =>
 {

   chrome -plugins/ cookies 
        const context = await browser.newContext(); 
        const page = await context.newPage();
        await page.goto('https://www.google.com/');

});

 
 test('Page playwright test', async ({page}) =>
 {

        await page.goto('https://www.google.com/');

 });