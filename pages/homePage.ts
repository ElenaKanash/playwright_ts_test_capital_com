import { Locator, Page } from '@playwright/test';
import { FCA_URL } from '../helpers/links';

class HomePage {
  readonly page: Page;
  readonly getAcceptAllCookiesBtn: Locator;
  readonly getWelcomeBanner: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getAcceptAllCookiesBtn = page.locator('#onetrust-accept-btn-handler');
    this.getWelcomeBanner = page.locator('div[class*="main_banner"] button')
  }

  async openMainPageFCA() {
    await this.page.goto(FCA_URL.FCABasePageUrl);
  }
  async clickAcceptAllCookiesBtn() {
    await this.getAcceptAllCookiesBtn.click();
  }
  async clickWelcomeBanner() {
    await this.getWelcomeBanner.click();
  }
}
export default HomePage;
