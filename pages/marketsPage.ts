import { Locator, Page } from '@playwright/test';

class MarketsPage {
  readonly page: Page;
  readonly getAccessBlockCreateAccountBtn: Locator;
  readonly getAccessBlockTryDemoAccountBtn: Locator;
  //readonly : Locator; 

  constructor(page: Page) {
    this.page = page;

    this.getAccessBlockCreateAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Create account' });
    this.getAccessBlockTryDemoAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Try demo account' });
  }

  async clickAccessBlockCreateAccountBtn() {
    await this.getAccessBlockCreateAccountBtn.click();
  }

  async clickAccessBlockTryDemoAccountBtn() {
    await this.getAccessBlockTryDemoAccountBtn.click();
  }
}
export default MarketsPage;