import { expect } from '@playwright/test';
import { test } from './base.js';
import { Assertions } from '../pages/assertionsForTests.js';
import HomePage from '../pages/homePage.js';
import Header from '../pages/headerPage.js';
import TableTradingInstruments from '../pages/elements/tableTradingInstruments.js';
import { PageOfTradingInstrument } from '../pages/pageOfTradingInstrument.js';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.02!01 | Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument , ${license} license, ${language} language`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);   

    await homePage.openMainPageFCA();    
    await homePage.clickAcceptAllCookiesBtn(); 
    await homePage.clickWelcomeBanner();   
  });

  test.describe('US_01.02!01_UnReg Role', () => {

    test('TC_01.02!01_101_UnReg | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Add to favourite]', async ({
      page,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickAddToFavouriteButton();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.02!01_102_UnReg | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Hover over tooltip "Long position overnight fee" --> Click button [Go to platform]', async ({
      page,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickLongPositionTooltip();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.02!01_103_UnReg | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Hover over tooltip "Short position overnight fee" --> Click button [Go to platform]', async ({
      page,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickShortPositionTooltip();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.02!01_104_UnReg | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Notification] on the widget “Trading instrument', async ({
      page,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickNotificationBellButton();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.02!01_105_UnReg | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [View detailed chart] on the widget “Trading instrument', async ({
      page,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickViewDetailedCharButton();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.02!01_106_UnReg | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Sell]', async ({
      page,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickSellButton();
      await expect.signUpFormIsOpened();
    });

    test('TC_01.02!01_107_UnReg | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Buy]', async ({
      page,
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickBuyButton();
      await expect.signUpFormIsOpened();
    });
  });

  test.describe('US_01.02!01_UnAuth Role', () => {

    test('TC_01.02!01_101_UnAuth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Add to favourite]', async ({
      page, unAutorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickAddToFavouriteButton();
      await expect.loginFormIsOpened();
    });

    test('TC_01.02!01_102_UnAuth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Hover over tooltip "Long position overnight fee" --> Click button [Go to platform]', async ({
      page, unAutorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickLongPositionTooltip();
      await expect.loginFormIsOpened();
    });

    test('TC_01.02!01_103_UnAuth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Hover over tooltip "Short position overnight fee" --> Click button [Go to platform]', async ({
      page, unAutorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickShortPositionTooltip();
      await expect.loginFormIsOpened();
    });

    test('TC_01.02!01_104_UnAuth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Notification] on the widget “Trading instrument', async ({
      page, unAutorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickNotificationBellButton();
      await expect.loginFormIsOpened();
    });

    test('TC_01.02!01_105_UnAuth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [View detailed chart] on the widget “Trading instrument', async ({
      page, unAutorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickViewDetailedCharButton();
      await expect.loginFormIsOpened();
    });

    test('TC_01.02!01_106_UnAuth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Sell]', async ({
      page, unAutorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickSellButton();
      await expect.loginFormIsOpened();
    });

    test('TC_01.02!01_107_UnAuth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Buy]', async ({
      page, unAutorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickBuyButton();
      await expect.loginFormIsOpened();
    });
  });

  test.describe('US_01.02!01_Auth Role', () => {

    test('TC_01.02!01_101_Auth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Add to favourite]', async ({
      page, autorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickAddToFavouriteButton();
      await expect.tradingPlatformIsOpened();
    });

    test('TC_01.02!01_102_Auth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Hover over tooltip "Long position overnight fee" --> Click button [Go to platform]', async ({
      page, autorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickLongPositionTooltip();
      await expect.tradingPlatformIsOpened();
    });

    test('TC_01.02!01_103_Auth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Hover over tooltip "Short position overnight fee" --> Click button [Go to platform]', async ({
      page, autorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickShortPositionTooltip();
      await expect.tradingPlatformIsOpened();
    });

    test('TC_01.02!01_104_Auth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Notification] on the widget “Trading instrument', async ({
      page, autorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickNotificationBellButton();
      await expect.tradingPlatformIsOpened();
    });

    test('TC_01.02!01_105_Auth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [View detailed chart] on the widget “Trading instrument', async ({
      page, autorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickViewDetailedCharButton();
      await expect.tradingPlatformIsOpened();
    });

    test('TC_01.02!01_106_Auth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Sell]', async ({
      page, autorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickSellButton();
      await expect.tradingPlatformIsOpened();
    });

    test('TC_01.02!01_107_Auth | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Buy]', async ({
      page, autorizedUserRole
    }) => {
      const header = new Header(page);
      const tableTradingInstruments = new TableTradingInstruments(page);
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      await header.hoverMarketsMenu();
      await header.clickMarketsSharesMenuItem();
      await tableTradingInstruments.clickTableInstrumentLinks();
      await pageOfTradingInstrument.clickBuyButton();
      await expect.tradingPlatformIsOpened();
    });

  });
});
