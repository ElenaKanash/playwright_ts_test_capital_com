import { test } from './base.js';
import { Assertions } from '../pages/assertionsForTests.js';
import HomePage from '../pages/homePage.js';
import Header from '../pages/headerPage.js';
import MarketsPage from '../pages/marketsPage.js';
import TableTradingInstruments from '../pages/elements/tableTradingInstruments.js';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.03!00 | Markets > Menu item [Forex], ${license} license, ${language} language`, () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
  });

  test.describe('TC_01.03!00_101 | Markets > Menu item [Forex] > Click button [Create account] in the block "Forex trading"', () => {

    test('TC_01.03!00_101_UnReg | Markets > Menu item [Forex] > Click button [Create account] in the block "Forex trading"', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await markets.clickTradingBlockCreateAccountBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.03!00_101_UnAuth | Markets > Menu item [Forex] > Click button [Create account] in the block "Forex trading"', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await markets.clickTradingBlockCreateAccountBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.03!00_101_Auth | Markets > Menu item [Forex] > Click button [Create account] in the block "Forex trading"', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await markets.clickTradingBlockCreateAccountBtn();

      await expect.tradingPlatformIsOpened();
    });
  });

  test.describe('TC_01.03!00_102 | Markets > Menu item [Forex] > Click button [Try Demo] in the block "Forex trading"', () => {

    test('TC_01.03!00_102_UnReg | Markets > Menu item [Forex] > Click button [Try Demo] in the block "Forex trading"', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await markets.clickTradingBlockTryDemoBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.03!00_102_UnAuth | Markets > Menu item [Forex] > Click button [Try Demo] in the block "Forex trading"', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await markets.clickTradingBlockTryDemoBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.03!00_102_Auth | Markets > Menu item [Forex] > Click button [Try Demo] in the block "Forex trading"', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await markets.clickTradingBlockTryDemoBtn();

      await expect.tradingPlatformIsOpened();
    });
  });

  

});