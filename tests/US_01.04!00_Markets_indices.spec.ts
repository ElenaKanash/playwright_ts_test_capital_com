import { test } from './base.js';
import { Assertions } from '../pages/assertionsForTests.js';
import HomePage from '../pages/homePage.js';
import Header from '../pages/headerPage.js';
import MarketsPage from '../pages/marketsPage.js';
import TableTradingInstruments from '../pages/elements/tableTradingInstruments.js';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.04!00 | Markets > Menu item [Indices], ${license} license, ${language} language`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
    //await homePage.clickWelcomeBanner();
  });

  test.describe('TC_01.04!00_101 | Markets > Menu item [Indices] > Click button [Create account] in the block "Indices trading"', () => {
    test('TC_01.04!00_101_UnReg | Markets > Menu item [Indices] > Click button [Create account] in the block "Indices trading"', async ({
      page,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickTradingBlockCreateAccountBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.04!00_101_UnAuth | Markets > Menu item [Indices] > Click button [Create account] in the block "Indices trading"', async ({
      page,
      unAutorizedUserRole,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickTradingBlockCreateAccountBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.04!00_101_Auth | Markets > Menu item [Indices] > Click button [Create account] in the block "Indices trading"', async ({
      page,
      autorizedUserRole,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickTradingBlockCreateAccountBtn();

      await expect.tradingPlatformIsOpened();
    });
  });

  test.describe('TC_01.04!00_102 | Markets > Menu item [Indices] > Click button [Try Demo] in the block "Indices trading"', () => {
    test('TC_01.04!00_102_UnReg | Markets > Menu item [Indices] > Click button [Try Demo] in the block "Indices trading"', async ({
      page,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickMarketsTradingBlockTryDemoBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.04!00_102_UnAuth | Markets > Menu item [Indices] > Click button [Try Demo] in the block "Indices trading"', async ({
      page,
      unAutorizedUserRole,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickMarketsTradingBlockTryDemoBtn();

      await expect.loginFormIsOpened();
    });

    test('TC_01.04!00_102_Auth | Markets > Menu item [Indices] > Click button [Try Demo] in the block "Indices trading"', async ({
      page,
      autorizedUserRole,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickMarketsTradingBlockTryDemoBtn();

      await expect.tradingPlatformDemoModeIsOpened();
    });
  });

  test.describe('TC_01.04!00_103 | Markets > Menu item [Indices] > Click button [Create account] in the block "Discover trading excellence with Capital.com"', () => {
    test('TC_01.04!00_103_UnReg | Markets > Menu item [Indices] > Click button [Create account] in the block "Discover trading excellence with Capital.com"', async ({
      page,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickDiscoverTradingBlockCreateAccountBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.04!00_103_UnAuth | Markets > Menu item [Indices] > Click button [Create account] in the block "Discover trading excellence with Capital.com"', async ({
      page,
      unAutorizedUserRole,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickDiscoverTradingBlockCreateAccountBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.04!00_103_Auth | Markets > Menu item [Indices] > Click button [Create account] in the block "Discover trading excellence with Capital.com"', async ({
      page,
      autorizedUserRole,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickDiscoverTradingBlockCreateAccountBtn();

      await expect.tradingPlatformIsOpened();
    });
  });

  test.describe('TC_01.04!00_104 | Markets > Menu item [Indices] > Click button [Try Demo] in the block "Discover trading excellence with Capital.com"', () => {
    test('TC_01.04!00_104_UnReg | Markets > Menu item [Indices] > Click button [Try Demo] in the block "Discover trading excellence with Capital.com"', async ({
      page,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickDiscoverTradingBlockTryDemoBtn();

      await expect.signUpFormIsOpened();
    });

    test('TC_01.04!00_104_UnAuth | Markets > Menu item [Indices] > Click button [Try Demo] in the block "Discover trading excellence with Capital.com"', async ({
      page,
      unAutorizedUserRole,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickDiscoverTradingBlockTryDemoBtn();

      await expect.loginFormIsOpened();
    });

    test('TC_01.04!00_104_Auth | Markets > Menu item [Indices] > Click button [Try Demo] in the block "Discover trading excellence with Capital.com"', async ({
      page,
      autorizedUserRole,
    }) => {
      const header = new Header(page);
      const markets = new MarketsPage(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
      await markets.clickDiscoverTradingBlockTryDemoBtn();

      await expect.tradingPlatformDemoModeIsOpened();
    });
  });

  test.describe('TC_01.04!00_105 | Markets > Menu item [Indices] > Click random trading instruments on the Widget “Trading instrument”', () => {
    test('TC_01.04!00_105_UnReg | Markets > Menu item [Indices] > Click random trading instruments on the Widget “Trading instrument”', async ({
      page,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();

      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });

    test.skip('TC_01.04!00_105_UnAuth | Markets > Menu item [Indices] > Click random trading instruments on the Widget “Trading instrument”"', async ({
      page,
      unAutorizedUserRole,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();

      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });

    test.skip('TC_01.04!00_105_Auth | Markets > Menu item [Indices] > Click random trading instruments on the Widget “Trading instrument”', async ({
      page,
      autorizedUserRole,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();

      await tableTradingInstruments.clickRandomInstrumentInTheSortedTable();
    });
  });

  test.describe('TC_01.04!00_199_All Roles', () => {
    test.beforeEach(async ({ page }) => {
      const header = new Header(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsIndicesMenuItem();
    });

    test('TC_01.04!00_199 | Markets > Menu item [Indices] > Collecting links from widget “Trading instrument” ', async ({
      page,
    }) => {
      const tableTradingInstruments = new TableTradingInstruments(page);

      await tableTradingInstruments.saveAllTableInstrumentLinksToFile(
        page,
        'a',
        'links.txt',
        'Indices'
      );
    });
  });
  
});
