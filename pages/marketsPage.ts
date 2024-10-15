import { Locator, Page } from '@playwright/test';

class MarketsPage {
  readonly page: Page;
  readonly getAccessBlockCreateAccountBtn: Locator;
  //readonly : Locator; 

  constructor(page: Page) {
    this.page = page;
    //this.getMarketsMenu = page.locator('header a[href="/en-gb/markets"]');
    this.getAccessBlockCreateAccountBtn = page.locator('#bannerFullScreen').getByRole('button', { name: 'Create account' });
  }

  async clickAccessBlockCreateAccountBtn () {
    await this.getAccessBlockCreateAccountBtn.click();
  }
}
export default MarketsPage;