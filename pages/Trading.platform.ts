import { test, expect } from '@playwright/test';
import { PLATFORM_URL } from '../helpers/links';

const tradingPlatformTitle = 'Trading Platform | Capital.com';

class TradingPlatform {
  [x: string]: any;
  constructor(page) {
    this.page = page;
    //locators
    this.getPlatformLogo = page.locator('topbar .logo');
  }

  async verifyTradingPlatform() { 
    await this.page.waitForLoadState('load');       
    await this.veryfyPlatformTitle();
    await this.verifyPlatformLogo();
  }

  async verifyPlatformLogo() {
    await expect(this.getPlatformLogo).toBeVisible();
  }
  async veryfyPlatformTitle() {
    await expect(this.page).toHaveTitle(tradingPlatformTitle);
  }

  async verifyTradingPlatformUrl() {
    await expect(this.page).toHaveURL(PLATFORM_URL.platformBaseUrl);
  }
}
export default TradingPlatform;

//Trading Platform | Capital.com
