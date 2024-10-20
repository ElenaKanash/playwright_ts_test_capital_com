import { test } from './base.js';
import { Assertions } from '../pages/assertionsForTests.js';
import HomePage from '../pages/homePage.js';
import Header from '../pages/headerPage.js';
import MarketsPage from '../pages/marketsPage.js';
import TableTradingInstruments from '../pages/elements/tableTradingInstruments.js';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.00!00 | Menu Markets > Menu section [Markets] , ${license} license, ${language} language`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
  });

  test.describe('TC_01.00!00_101 | Markets > Menu section [Markets] > Click button [Create account] in the block "Access thousands of global markets"', () => {

    test('TC_01.00!00_101_UnReg', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickAccessBlockCreateAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.00!00_101_UnAuth', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickAccessBlockCreateAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.00!00_101_Auth', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickAccessBlockCreateAccountBtn();
      await expect.tradingPlatformIsOpened();
    });
  });

  test.describe('TC_01.00!00_102 | Markets > Menu section [Markets] > Click button [Try demo account] in the block "Access thousands of global markets"', () => {

    test('TC_01.00!00_102_UnReg', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickAccessBlockTryDemoAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.00!00_102_UnAuth', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickAccessBlockTryDemoAccountBtn();
      await expect.loginFormIsOpened();
    });

    test('TC_01.00!00_102_Auth', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickAccessBlockTryDemoAccountBtn();
      await expect.tradingPlatformDemoModeIsOpened();
    });
  });

  test.describe('TC_01.00!00_103 | Markets > Menu section [Markets] > Click button [Create account] in the block "Why choose Capital.com for your trading?"', () => {

    test('TC_01.00!00_103_UnReg', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockCreateAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.00!00_103_UnAuth', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockCreateAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.00!00_103_Auth', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockCreateAccountBtn();
      await expect.tradingPlatformIsOpened();
    });
  });

  test.describe('TC_01.00!00_104 | Markets > Menu section [Markets] > Click button [Try Demo] in the block "Why choose Capital.com for your trading?"', () => {

    test('TC_01.00!00_104_UnReg', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockTryDemoBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.00!00_104_UnAuth', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockTryDemoBtn();
      await expect.loginFormIsOpened();
    });

    test('TC_01.00!00_104_Auth', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockTryDemoBtn();
      await expect.tradingPlatformDemoModeIsOpened();
    });
  });

  test.describe('TC_01.00!00_105 | Markets > Menu section [Markets] > Click button [Create account] in the block "Access thousands of global markets"', () => {

    test('TC_01.00!00_105_UnReg', async ({ page }) => {
      const header = new Header(page);      
      const tableTradingInstruments = new TableTradingInstruments(page);;

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      
      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });

    test('TC_01.00!00_105_UnAuth', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);      
      const tableTradingInstruments = new TableTradingInstruments(page);;

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      
      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });

    test('TC_01.00!00_105_Auth', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);      
      const tableTradingInstruments = new TableTradingInstruments(page);;

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      
      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });
  });

});