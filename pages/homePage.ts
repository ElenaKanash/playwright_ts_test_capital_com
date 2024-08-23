import { Locator, Page } from '@playwright/test';
import { FCA_URL } from '../helpers/links';

class HomePage {
  readonly page: Page;
  readonly getAcceptAllCookiesBtn: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getAcceptAllCookiesBtn = page.locator('#onetrust-accept-btn-handler');
  }

  async openMainPageFCA() {
    await this.page.goto(FCA_URL.FCABasePageUrl);
  }
  async clickAcceptAllCookiesBtn() {
    await this.getAcceptAllCookiesBtn.click();
  }
}
export default HomePage;
