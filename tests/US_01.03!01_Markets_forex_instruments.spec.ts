import { test } from './base.js';
import { Assertions } from '../pages/assertionsForTests.js';
import HomePage from '../pages/homePage.js';
import Header from '../pages/headerPage.js';
import TableTradingInstruments from '../pages/elements/tableTradingInstruments.js';
import { PageOfTradingInstrument } from '../pages/pageOfTradingInstrument.js';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.03!01 | Menu [Markets] > Menu item [Forex] > Page of "Shares" trading instrument , ${license} license, ${language} language`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
    await homePage.clickWelcomeBanner();

  });

  test.describe('TC_01.03!01_101 | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Add to favourite]', () => {

    test('TC_01.03!01_101_UnReg | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Add to favourite]', async ({ page }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickAddToFavouriteButton();
      await expect.signUpFormIsOpened();

    });

    test('TC_01.03!01_101_UnAuth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Add to favourite]', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickAddToFavouriteButton();
      await expect.loginFormIsOpened();

    });

    test('TC_01.03!01_101_Auth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Add to favourite]', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickAddToFavouriteButton();
      await expect.tradingPlatformIsOpened();
    });

  });

  test.describe('TC_01.03!01_102 | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Long position overnight fee" --> Click button [Go to platform]', () => {

    test('TC_01.03!01_102_UnReg | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Long position overnight fee" --> Click button [Go to platform]', async ({ page }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickLongPositionTooltip();
      await expect.signUpFormIsOpened();

    });

    test('TC_01.03!01_102_UnAuth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Long position overnight fee" --> Click button [Go to platform]', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickLongPositionTooltip();
      await expect.loginFormIsOpened();

    });

    test('TC_01.03!01_102_Auth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Long position overnight fee" --> Click button [Go to platform]', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickLongPositionTooltip();
      await expect.tradingPlatformIsOpened();
    });

  });

  test.describe('TC_01.03!01_103 | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Short position overnight fee" --> Click button [Go to platform]', () => {

    test('TC_01.03!01_103_UnReg | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Short position overnight fee" --> Click button [Go to platform]', async ({ page }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickShortPositionTooltip();
      await expect.signUpFormIsOpened();

    });

    test('TC_01.03!01_103_UnAuth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Short position overnight fee" --> Click button [Go to platform]', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickShortPositionTooltip();
      await expect.loginFormIsOpened();

    });

    test('TC_01.03!01_103_Auth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Short position overnight fee" --> Click button [Go to platform]', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickShortPositionTooltip();
      await expect.tradingPlatformIsOpened();
    });

  });

  test.describe('TC_01.03!01_104 | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Widget “Trading instrument” > Click button [Notification]', () => {

    test('TC_01.03!01_104_UnReg | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Widget “Trading instrument” > Click button [Notification] ', async ({ page }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickNotificationBellButton();
      await expect.signUpFormIsOpened();

    });

    test('TC_01.03!01_104_UnAuth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Widget “Trading instrument” > Click button [Notification] ', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickNotificationBellButton();
      await expect.loginFormIsOpened();

    });

    test('TC_01.03!01_104_Auth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Widget “Trading instrument” > Click button [Notification] ', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickNotificationBellButton();
      await expect.tradingPlatformIsOpened();
    });

  });

  test.describe('TC_01.03!01_105 | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [View detailed chart] on the widget “Trading instrument', () => {

    test('TC_01.03!01_105_UnReg | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [View detailed chart] on the widget “Trading instrument', async ({ page }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickViewDetailedCharButton();
      await expect.signUpFormIsOpened();

    });

    test('TC_01.03!01_105_UnAuth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [View detailed chart] on the widget “Trading instrument', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickViewDetailedCharButton();
      await expect.loginFormIsOpened();

    });

    test('TC_01.03!01_105_Auth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [View detailed chart] on the widget “Trading instrument', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickViewDetailedCharButton();
      await expect.tradingPlatformIsOpened();
    });

  });

  test.describe('TC_01.03!01_106 | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Sell] on the widget “Trading instrument', () => {

    test('TC_01.03!01_106_UnReg | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Sell] on the widget “Trading instrument', async ({ page }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickSellButton();
      await expect.signUpFormIsOpened();

    });

    test('TC_01.03!01_106_UnAuth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Sell] on the widget “Trading instrument', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickSellButton();
      await expect.loginFormIsOpened();

    });

    test('TC_01.03!01_106_Auth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Sell] on the widget “Trading instrument', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickSellButton();
      await expect.tradingPlatformIsOpened();
    });

  });

  test.describe('TC_01.03!01_107 | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Buy] on the widget “Trading instrument', () => {

    test('TC_01.03!01_107_UnReg | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Buy] on the widget “Trading instrument', async ({ page }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickBuyButton();
      await expect.signUpFormIsOpened();

    });

    test('TC_01.03!01_107_UnAuth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Buy] on the widget “Trading instrument', async ({ page, unAutorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickBuyButton();
      await expect.loginFormIsOpened();

    });

    test('TC_01.03!01_107_Auth | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Click button [Buy] on the widget “Trading instrument', async ({ page, autorizedUserRole }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsForexMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickBuyButton();
      await expect.tradingPlatformIsOpened();
    });

  });

});