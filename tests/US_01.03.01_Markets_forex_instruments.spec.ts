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
});