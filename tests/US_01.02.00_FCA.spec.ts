import { test, expect } from '@playwright/test';


import HomePage from '../pages/homePage';
import Header from '../pages/Header';
import Markets from '../pages/elements/Markets';
import SignUp from '../pages/elements/SignUp';


const license = 'FCA';

test.describe(`US_01.02!00 | Menu [Markets] > Menu item [Shares], ${license} license`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const header = new Header(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
    await header.hoverMarketsMenu();
    await header.clickMarketsSharesSubMenu();
  });

  test('TC_01.02!00_101_UnReg | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({
    page,
  }) => {
    const markets = new Markets(page);
    const signUp = new  SignUp(page);

    await markets.clickMarketsTradingBlockSignUpBtn();
    await expect(signUp.getSignUpForm).toBeVisible();
    await signUp.verifySignUpForm();
  });

  test('TC_01.02!00_101_UnAuth | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({
    page,
  }) => {
    
    const markets = new Markets(page);
    const signUp = new SignUp(page);

    await markets.clickMarketsTradingBlockSignUpBtn();
    await expect(signUp.getSignUpForm).toBeVisible();
    await signUp.verifySignUpForm();
  });

  test('TC_01.02!00_101_Auth | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({
    page,
  }) => {
   
    const markets = new Markets(page);    

    await markets.clickMarketsTradingBlockSignUpBtn();
  });
});
