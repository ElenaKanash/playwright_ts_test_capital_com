import { Locator, Page } from '@playwright/test';

class MarketsPage {
  readonly page: Page;
  readonly getAccessBlockCreateAccountBtn: Locator;
  readonly getAccessBlockTryDemoAccountBtn: Locator;
  readonly getWhyChooseCapitalBlockCreateAccountBtn: Locator;
  //readonly : Locator; 

  constructor(page: Page) {
    this.page = page;

    this.getAccessBlockCreateAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Create account' });
    this.getAccessBlockTryDemoAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Try demo account' });
    this.getWhyChooseCapitalBlockCreateAccountBtn = page.getByRole('button', { name: 'Create account' }).nth(1)
    //getByRole('button', { name: 'Create account' }).nth(1)
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
}
export default MarketsPage;