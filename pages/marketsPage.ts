import { Locator, Page } from '@playwright/test';

class MarketsPage {
  readonly page: Page;
  readonly getAccessBlockCreateAccountBtn: Locator;
  readonly getAccessBlockTryDemoAccountBtn: Locator;
  readonly getWhyChooseCapitalBlockCreateAccountBtn: Locator;
  readonly getWhyChooseCapitalBlockTryDemoBtn: Locator;
  //readonly : Locator; 

  constructor(page: Page) {
    this.page = page;

    this.getAccessBlockCreateAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Create account' });
    this.getAccessBlockTryDemoAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Try demo account' });
    this.getWhyChooseCapitalBlockCreateAccountBtn = page.getByRole('button', { name: 'Create account' }).nth(1);
    this.getWhyChooseCapitalBlockTryDemoBtn = page.getByRole('button', { name: 'Try Demo', exact: true });
  }

  async clickAccessBlockCreateAccountBtn() {
    await this.getAccessBlockCreateAccountBtn.click();
  }

  async clickAccessBlockTryDemoAccountBtn() {
    await this.getAccessBlockTryDemoAccountBtn.click();
  }

  async clickWhyChooseCapitalBlockCreateAccountBtn() {
    await this.getWhyChooseCapitalBlockCreateAccountBtn.click()
  }

  async clickWhyChooseCapitalBlockTryDemoBtn() {
    await this.getWhyChooseCapitalBlockTryDemoBtn.click();
  }
}
export default MarketsPage;