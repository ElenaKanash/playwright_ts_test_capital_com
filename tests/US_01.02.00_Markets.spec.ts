import { test, expect } from '@playwright/test';

import HomePage from '../pages/homePage';
import Header from '../pages/Header';
import Markets from '../pages/Markets';
import SignUp from '../pages/elements/SignUp';
import Login from '../pages/elements/Login';
import { PLATFORM_URL } from '../helpers/links';
import TradingPlatform from '../pages/Trading.platform';
import Assertions from '../pages/elements/Assertions';

const license = 'FCA';

test.describe(`US_01.02!00 | Menu [Markets] > Menu item [Shares], ${license} license`, () => {  
  test.beforeEach(async ({ page }) => {    
    const homePage = new HomePage(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
  });

  test.describe('US_01.02!00_UnReg | Menu [Markets] > Menu item [Shares]', () => {
    test.beforeEach(async ({ page }) => {
      const header = new Header(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
    });

    test('TC_01.02!00_101_UnReg | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({
      page}) => {
      const markets = new Markets(page);
      const signUp = new SignUp(page);
      const assertions = new Assertions(page, signUp);

      await markets.clickMarketsTradingBlockSignUpBtn();      
      await assertions.SignUpFormIsOpened();
    });

    test('TC_01.02.00_102_UnReg | Markets > Menu item [Shares] > Click button [Try Demo]  in the block "Shares trading"', async({page}) => {
      const markets = new Markets(page);
      const signUp = new SignUp(page);
      const assertions = new Assertions(page, signUp);

      await markets.clickMarketsTradingBlockTryDemoBtn();      
      await assertions.SignUpFormIsOpened();
      
    })
  });

  test.describe('US_01.02!00_UnAuth | Menu [Markets] > Menu item [Shares],', () => {
    test.beforeEach(async ({ page }) => {
      const login = new Login(page);
      const header = new Header(page);

      await login.unAutorizedUser();
      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
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
  });

   test.describe('US_01.02!00_Auth | Menu [Markets] > Menu item [Shares],', () => {
    test.beforeEach(async ({ page }) => {
      const login = new Login(page);
      const header = new Header(page);

      await login.autorizedUser();
      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
    });

    test('TC_01.02!00_101_Auth | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({
      page,
    }) => {
      const markets = new Markets(page); 
      const tradingPlatform = new TradingPlatform(page);     

      await markets.clickMarketsTradingBlockSignUpBtn();

      await tradingPlatform.verifyTradingPlatform();      
      await expect(page).toHaveURL(PLATFORM_URL.platformBaseUrl);
      

    });
  }); 
});
