import { Locator, Page } from '@playwright/test';

class MarketsPage {
  readonly page: Page;
  readonly getMarketsBlockCreateAccountBtn: Locator;
  readonly getMarketsBlockTryDemoAccountBtn: Locator;
  readonly getWhyChooseCapitalBlockCreateAccountBtn: Locator;
  readonly getWhyChooseCapitalBlockTryDemoBtn: Locator;
  readonly getTradingBlockCreateAccountBtn: Locator;
  readonly getTradingBlockTryDemoBtn: Locator;
  //readonly : Locator; 

  constructor(page: Page) {
    this.page = page;

    this.getMarketsBlockCreateAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Create account' });
    this.getMarketsBlockTryDemoAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Try demo account' });
    this.getTradingBlockCreateAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Create account' });
    this.getTradingBlockTryDemoBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Try demo' });
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

  async clickTradingBlockTryDemoBtn() {
    if (this.getTradingBlockTryDemoBtn) {
      await this.getTradingBlockTryDemoBtn.click();
    } else {
      throw new Error(
        "Bug! Button [Try Demo] is absent"
      );
    }
  }
}
export default MarketsPage;