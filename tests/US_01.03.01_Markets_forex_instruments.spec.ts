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

  test.describe('TC_01.03!01_101 | Markets > Menu item [Forex] > Page of "Forex" trading instrument > Hover over tooltip "Long position overnight fee" --> Click button [Go to platform]', () => {

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

});