import { Locator, Page } from '@playwright/test';

class MarketsPage {
  readonly page: Page;
  readonly getMarketsBlockCreateAccountBtn: Locator;
  readonly getMarketsBlockTryDemoAccountBtn: Locator;
  readonly getWhyChooseCapitalBlockCreateAccountBtn: Locator;
  readonly getWhyChooseCapitalBlockTryDemoBtn: Locator;
  readonly getTradingBlockCreateAccountBtn: Locator
  //readonly : Locator; 

  constructor(page: Page) {
    this.page = page;

    this.getMarketsBlockCreateAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Create account' });
    this.getMarketsBlockTryDemoAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Try demo account' });
    this.getTradingBlockCreateAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Create account' });
    this.getWhyChooseCapitalBlockCreateAccountBtn = page.getByRole('button', { name: 'Create account' }).nth(1);
    this.getWhyChooseCapitalBlockTryDemoBtn = page.getByRole('button', { name: 'Try Demo', exact: true });
  }

  async clickMarketsBlockCreateAccountBtn() {
    await this.getMarketsBlockCreateAccountBtn.click();
  }

  async clickMarketsBlockTryDemoAccountBtn() {
    await this.getMarketsBlockTryDemoAccountBtn.click();
  }

  async clickWhyChooseCapitalBlockCreateAccountBtn() {
    await this.getWhyChooseCapitalBlockCreateAccountBtn.click()
  }

  async clickWhyChooseCapitalBlockTryDemoBtn() {
    await this.getWhyChooseCapitalBlockTryDemoBtn.click();
  }

  async clickTradingBlockCreateAccountBtn() {
    await this.getTradingBlockCreateAccountBtn.click();
  }
}
export default MarketsPage;