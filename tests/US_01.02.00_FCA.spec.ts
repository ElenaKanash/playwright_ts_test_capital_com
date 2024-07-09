import { test, expect } from "@playwright/test";
import HomePage from "../pages/homePage";

test.describe('US_01.02!00 | Menu [Markets] > Menu item [Shares], FCA license', ()=>{
 
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openMainPageFCA();
  });

  test('TC_01.02!00_101_UnReg | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({ page }) => {
    
  });

  test('TC_01.02!00_101_UnAuth | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({ page }) => {
    
  });

  test('TC_01.02!00_101_Auth | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({ page }) => {
    
  });

})