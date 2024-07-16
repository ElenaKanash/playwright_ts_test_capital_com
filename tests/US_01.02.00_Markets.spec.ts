import { test, expect } from '@playwright/test';

import HomePage from '../pages/homePage';
import Header from '../pages/Header';
import Markets from '../pages/elements/Markets';
import SignUp from '../pages/elements/SignUp';
import Login from '../pages/elements/Login';

const license = 'FCA';

test.describe(`US_01.02!00 | Menu [Markets] > Menu item [Shares], ${license} license`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const header = new Header(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
    await header.hoverMarketsMenu();
    await header.clickMarketsSharesMenuItem();
  });

  test.describe('US_01.02!00_UnReg | Menu [Markets] > Menu item [Shares]', () => {
    test.beforeEach(async ({ page }) => {
      //actions for unreg user
    });

    test('TC_01.02!00_101_UnReg | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({
      page,
    }) => {
      const markets = new Markets(page);
      const signUp = new SignUp(page);

      await markets.clickMarketsTradingBlockSignUpBtn();
      await expect(signUp.getSignUpForm).toBeVisible();
      await signUp.verifySignUpForm();
    });
  });

  test.describe('US_01.02!00_UnAuth | Menu [Markets] > Menu item [Shares],', () => {
    test.beforeEach(async ({ page }) => {
      const login = new Login(page);
      //await login.unAutorizedUser();
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
      await login.autorizedUser();
    });

    test('TC_01.02!00_101_Auth | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({
      page,
    }) => {
      const markets = new Markets(page);

      await markets.clickMarketsTradingBlockSignUpBtn();
    });
  });
});
