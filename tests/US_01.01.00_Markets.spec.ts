import { test } from './base.js';
import { Assertions } from '../pages/assertionsForTests.js';
import HomePage from '../pages/homePage.js';
import Header from '../pages/headerPage.js';
import MarketsPage from '../pages/marketsPage.js';
import TableTradingInstruments from '../pages/elements/tableTradingInstruments.js';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.01!00 | Markets > Menu section [Markets] , ${license} license, ${language} language`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
  });

  test.describe('TC_01.01!00_101 | Markets > Menu section [Markets] > Click button [Create account] in the block "Access thousands of global markets"', () => {

    test('TC_01.01!00_101_UnReg | Markets > Menu section [Markets] > Click button [Create account] in the block "Access thousands of global markets"', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickMarketsBlockCreateAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.01!00_101_UnAuth | Markets > Menu section [Markets] > Click button [Create account] in the block "Access thousands of global markets"', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickMarketsBlockCreateAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.01!00_101_Auth | Markets > Menu section [Markets] > Click button [Create account] in the block "Access thousands of global markets"', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickMarketsBlockCreateAccountBtn();
      await expect.tradingPlatformIsOpened();
    });
  });

  test.describe('TC_01.01!00_102 | Markets > Menu section [Markets] > Click button [Try demo account] in the block "Access thousands of global markets"', () => {

    test('TC_01.01!00_102_UnReg | Markets > Menu section [Markets] > Click button [Try demo account] in the block "Access thousands of global markets"', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickMarketsBlockTryDemoAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.01!00_102_UnAuth | Markets > Menu section [Markets] > Click button [Try demo account] in the block "Access thousands of global markets"', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickMarketsBlockTryDemoAccountBtn();
      await expect.loginFormIsOpened();
    });

    test('TC_01.01!00_102_Auth | Markets > Menu section [Markets] > Click button [Try demo account] in the block "Access thousands of global markets"', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickMarketsBlockTryDemoAccountBtn();
      await expect.tradingPlatformDemoModeIsOpened();
    });
  });

  test.describe('TC_01.01!00_103 | Markets > Menu section [Markets] > Click button [Create account] in the block "Why choose Capital.com for your trading?"', () => {

    test('TC_01.01!00_103_UnReg | Markets > Menu section [Markets] > Click button [Create account] in the block "Why choose Capital.com for your trading?"', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockCreateAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.01!00_103_UnAuth | Markets > Menu section [Markets] > Click button [Create account] in the block "Why choose Capital.com for your trading?"', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockCreateAccountBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.01!00_103_Auth | Markets > Menu section [Markets] > Click button [Create account] in the block "Why choose Capital.com for your trading?"', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockCreateAccountBtn();
      await expect.tradingPlatformIsOpened();
    });
  });

  test.describe('TC_01.01!00_104 | Markets > Menu section [Markets] > Click button [Try Demo] in the block "Why choose Capital.com for your trading?"', () => {

    test('TC_01.01!00_104_UnReg | Markets > Menu section [Markets] > Click button [Try Demo] in the block "Why choose Capital.com for your trading?"', async ({ page }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockTryDemoBtn();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.01!00_104_UnAuth | Markets > Menu section [Markets] > Click button [Try Demo] in the block "Why choose Capital.com for your trading?"', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockTryDemoBtn();
      await expect.loginFormIsOpened();
    });

    test('TC_01.01!00_104_Auth | Markets > Menu section [Markets] > Click button [Try Demo] in the block "Why choose Capital.com for your trading?"', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      await markets.clickWhyChooseCapitalBlockTryDemoBtn();
      await expect.tradingPlatformDemoModeIsOpened();
    });
  });

  test.describe('TC_01.00!00_105 | Markets > Menu section [Markets] > Click random trading instruments on the Widget “Trading instrument”', () => {

    test('TC_01.01!00_105_UnReg | Markets > Menu section [Markets] > Click random trading instruments on the Widget “Trading instrument”', async ({ page }) => {
      const header = new Header(page);      
      const tableTradingInstruments = new TableTradingInstruments(page);;

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      
      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });

    test('TC_01.01!00_105_UnAuth | Markets > Menu section [Markets] > Click random trading instruments on the Widget “Trading instrument”"', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);      
      const tableTradingInstruments = new TableTradingInstruments(page);;

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      
      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });

    test('TC_01.01!00_105_Auth | Markets > Menu section [Markets] > Click random trading instruments on the Widget “Trading instrument”', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);      
      const tableTradingInstruments = new TableTradingInstruments(page);;

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
      
      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });
  });

  test.describe('TC_01.01!00_199_All Roles', () => {
    test.beforeEach(async ({ page }) => {
      const header = new Header(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsMenuSectionTitle();
    });

    test('TC_01.01!00_199 | Markets > Menu section [Markets] > Collecting links from widget “Trading instrument” ', async ({
      page,
    }) => {
      const tableTradingInstruments = new TableTradingInstruments(page);

      await tableTradingInstruments.saveAllTableInstrumentLinksToFile(page, 'a', 'links.txt');
    });
  });

});