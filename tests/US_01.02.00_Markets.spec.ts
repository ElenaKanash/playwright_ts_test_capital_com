import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import Header from '../pages/headerPage';
import Login from '../pages/loginPage';
import {  MarkertDiscoverBlockCreateAccountButton, MarkertDiscoverBlockTryDemoButton, MarkertTradingBlockSignUpButton, MarkertTradingBlockTryDemoButton } from '../pages/elements/marketsSectionButtons';
import { Assertions } from '../pages/assertionsForTests';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.02!00 | Menu [Markets] > Menu item [Shares], ${license} license, ${language} language`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
  });

  test.describe('US_01.02!00_UnReg Role', () => {
    test.beforeEach(async ({ page }) => {
      const header = new Header(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
    });

    test('TC_01.02!00_101_UnReg | Markets > Menu item [Shares] > Click button [Sign up] in the block "Shares trading"', async ({
      page,
    }) => {      
      const markertTradingBlockSignUpButton = new MarkertTradingBlockSignUpButton(page);
      const expect = new Assertions(page);

      await markertTradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();      
      await expect.signUpFormIsOpened();    
    });

    test('TC_01.02!00_102_UnReg | Markets > Menu item [Shares] > Click button [Try Demo]  in the block "Shares trading"', async ({
      page,
    }) => {
      const markertTradingBlockTryDemoButton = new MarkertTradingBlockTryDemoButton(page);
      const expect = new Assertions(page);

      await markertTradingBlockTryDemoButton.clickMarkertTradingBlockTryDemoButton();
      await expect.signUpFormIsOpened(); 
    });

    test('TC_01.02!00_103_UnReg | Markets > Menu item [Shares] > Click button [Create account ] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockCreateAccountButton = new MarkertDiscoverBlockCreateAccountButton(page);
      const expect = new Assertions(page);

      await markertDiscoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();
      await expect.signUpFormIsOpened(); 
    });

    test('TC_01.02!00_104_UnReg | Markets > Menu item [Shares] > Click button [Try Demo] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockTryDemoButton = new MarkertDiscoverBlockTryDemoButton(page);
      const expect = new Assertions(page);

      await markertDiscoverBlockTryDemoButton.clickMarkertDiscoverBlockTryDemoButton();
      await expect.signUpFormIsOpened(); 
    });
  });

  test.describe('US_01.02!00_UnAuth Role', () => {
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
      const expect = new Assertions(page);

      await markertTradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();
      await expect.signUpFormIsOpened(); 
    });

    test('TC_01.02!00_102_UnAuth | Markets > Menu item [Shares] > Click button [Try Demo]  in the block "Shares trading"', async ({
      page,
    }) => {
      const markertTradingBlockTryDemoButton = new MarkertTradingBlockTryDemoButton(page);
      const expect = new Assertions(page);

      await markertTradingBlockTryDemoButton.clickMarkertTradingBlockTryDemoButton();
      await expect.loginFormIsOpened();
    });

    test('TC_01.02!00_103_UnAuth | Markets > Menu item [Shares] > Click button [Create account ] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockCreateAccountButton = new MarkertDiscoverBlockCreateAccountButton(page);
      const expect = new Assertions(page);

      await markertDiscoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.02!00_104_UnAuth | Markets > Menu item [Shares] > Click button [Try Demo] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockTryDemoButton = new MarkertDiscoverBlockTryDemoButton(page);
      const expect = new Assertions(page);

      await markertDiscoverBlockTryDemoButton.clickMarkertDiscoverBlockTryDemoButton();
      await expect.loginFormIsOpened();
    });
  });

  test.describe('US_01.02!00_Auth Role', () => {
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
      const expect = new Assertions(page);

      await markertTradingBlockSignUpButton.clickMarkertTradingBlockSignUpButton();
      await expect.tradingPlatformIsOpened();
    });

    test('TC_01.02!00_102_Auth | Markets > Menu item [Shares] > Click button [Try Demo]  in the block "Shares trading"', async ({
      page,
    }) => {
      const markertTradingBlockTryDemoButton = new MarkertTradingBlockTryDemoButton(page);
      const expect = new Assertions(page);

      await markertTradingBlockTryDemoButton.clickMarkertTradingBlockTryDemoButton();
      await expect.tradingPlatformDemoModeIsOpened();
    });

    test('TC_01.02!00_103_Auth | Markets > Menu item [Shares] > Click button [Create account ] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockCreateAccountButton = new MarkertDiscoverBlockCreateAccountButton(page);
      const expect = new Assertions(page);

      await markertDiscoverBlockCreateAccountButton.clickMarkertDiscoverBlockCreateAccountButton();
      await expect.tradingPlatformIsOpened();
    });

    test('TC_01.02!00_104_Auth | Markets > Menu item [Shares] > Click button [Try Demo] in the block "Discover trading excellence with Capital.com"', async({page}) => {
      const markertDiscoverBlockTryDemoButton = new MarkertDiscoverBlockTryDemoButton(page);
      const expect = new Assertions(page);

      await markertDiscoverBlockTryDemoButton.clickMarkertDiscoverBlockTryDemoButton();
      await expect.tradingPlatformDemoModeIsOpened();
    });
  });
});
