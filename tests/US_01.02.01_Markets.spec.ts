import { test, expect } from '@playwright/test';
import { Assertions } from '../pages/assertionsForTests';
import HomePage from '../pages/homePage';
import Header from '../pages/headerPage';
import TableTradingInstruments from '../pages/elements/tableTradingInstruments';
import { PageOfTradingInstrument } from '../pages/pageOfTradingInstrument';

const license = 'FCA';
const language = 'EN';

test.describe(`US_01.02!01 | Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument , ${license} license, ${language} language`, () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const header = new Header(page);
    const tableTradingInstruments = new TableTradingInstruments(page);

    await homePage.openMainPageFCA();
    await homePage.clickAcceptAllCookiesBtn();
    await header.hoverMarketsMenu();
    await header.clickMarketsSharesMenuItem();
    await tableTradingInstruments.clickrandomRow();
  });

  test.describe('US_01.02!01_UnReg Role', () => {

    test('TC_01.02!01_101_UnReg | Markets > Menu [Markets] > Menu item [Shares] > Page of "Shares" trading instrument > Click button [Add to favourite]', async ({
      page,
    }) => {
      const pageOfTradingInstrument = new PageOfTradingInstrument(page);
      const expect = new Assertions(page);

      pageOfTradingInstrument.clickAddToFavouriteButton();
      await expect.signUpFormIsOpened()

    });
  });

});
