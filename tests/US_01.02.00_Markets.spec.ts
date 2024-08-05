import { test, expect } from '@playwright/test';

import HomePage from '../pages/homePage';
import Header from '../pages/Header';
import Markets from '../pages/Markets';
import Login from '../pages/elements/Login';
import {
  expectSignUpFormIsOpened,
  expectLoginFormIsOpened,
  expectTradingPlatform,
  expectTradingPlatformDemoMode,
} from '../pages/elements/Assertions';
import {  MarkertDiscoverBlockCreateAccountButton, MarkertTradingBlockSignUpButton, MarkertTradingBlockTryDemoButton } from '../pages/elements/MarketsBtns';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.02!00 | Menu [Markets] > Menu item [Shares], ${license} license, ${language} language`, () => {
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
      page,
    }) => {      
      const markertTradingBlockSignUpButton = new MarkertTradingBlockSignUpButton(page);

      await markertTradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();
      await expectSignUpFormIsOpened(page);     
    });

    test('TC_01.02!00_102_UnReg | Markets > Menu item [Shares] > Click button [Try Demo]  in the block "Shares trading"', async ({
      page,
    }) => {
      const markertTradingBlockTryDemoButton = new MarkertTradingBlockTryDemoButton(page);

      await markertTradingBlockTryDemoButton.clickMarkertTradingBlockTryDemoButton();
      await expectSignUpFormIsOpened(page);
    });

    test('TC_01.02!00_103_UnReg | Markets > Menu item [Shares] > Click button [Create account ] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockCreateAccountButton = new MarkertDiscoverBlockCreateAccountButton(page);

      await markertDiscoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();
      await expectSignUpFormIsOpened(page);
    });
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
      const markertTradingBlockSignUpButton = new MarkertTradingBlockSignUpButton(page);

      await markertTradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();
      await expectSignUpFormIsOpened(page);
    });

    test('TC_01.02!00_102_UnAuth | Markets > Menu item [Shares] > Click button [Try Demo]  in the block "Shares trading"', async ({
      page,
    }) => {
      const markertTradingBlockTryDemoButton = new MarkertTradingBlockTryDemoButton(page);

      await markertTradingBlockTryDemoButton.clickMarkertTradingBlockTryDemoButton();
      await expectLoginFormIsOpened(page);
    });

    test('TC_01.02!00_103_UnAuth | Markets > Menu item [Shares] > Click button [Create account ] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockCreateAccountButton = new MarkertDiscoverBlockCreateAccountButton(page);

      await markertDiscoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();
      await expectLoginFormIsOpened(page);
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
      const markertTradingBlockSignUpButton = new MarkertTradingBlockSignUpButton(page);

      await markertTradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();
      await expectTradingPlatform(page);
    });

    test('TC_01.02!00_102_Auth | Markets > Menu item [Shares] > Click button [Try Demo]  in the block "Shares trading"', async ({
      page,
    }) => {
      const markertTradingBlockTryDemoButton = new MarkertTradingBlockTryDemoButton(page);

      await markertTradingBlockTryDemoButton.clickMarkertTradingBlockTryDemoButton();
      await expectTradingPlatformDemoMode(page);
    });

    test('TC_01.02!00_103_Auth | Markets > Menu item [Shares] > Click button [Create account ] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockCreateAccountButton = new MarkertDiscoverBlockCreateAccountButton(page);

      await markertDiscoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();
      await expectTradingPlatformDemoMode(page);
    });
  });
});
