import { Locator, Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { TradingPlanformURL } from '../helpers/links';

const tradingPlatformTitle = 'Trading Platform | Capital.com';

class TradingPlatform {
  readonly page: Page;
  readonly getPlatformLogo: Locator;
  readonly getPlatformAccountBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getPlatformLogo = page.locator('topbar .logo');
    this.getPlatformAccountBtn = page.locator('menu-button.account');
  }

  async verifyTradingPlatform() {
    await this.page.waitForLoadState('load');
    await this.veryfyPlatformTitle();
    await this.verifyPlatformLogo();
  }

  async verifyTradingPlatformDemoMode() {
    await this.page.waitForLoadState('load');
    await this.veryfyPlatformTitle();
    await this.verifyPlatformLogo();
    await this.verifyTradingPlatformDemoAccountBtn();
  }

  async verifyPlatformLogo() {
    await expect(this.getPlatformLogo).toBeVisible({ timeout: 10000 });
  }

  async veryfyPlatformTitle() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.page).toHaveTitle(tradingPlatformTitle);
  }

  async verifyTradingPlatformUrl() {
    await expect(this.page).toHaveURL(
      TradingPlanformURL.tradingPlatform_baseURL
    );
  }

  async verifyTradingPlatformDemoAccountBtn() {
    await expect(this.getPlatformAccountBtn).toHaveText('demo');
  }

  async verifyTradingPlatformDemoUrl() {
    const currentUrl = await this.page.url();

    if (currentUrl === TradingPlanformURL.tradingPlatform_demoURL) {
      await expect(this.page).toHaveURL(
        TradingPlanformURL.tradingPlatform_demoURL
      );
    } else {
      throw new Error(
        "Bug! The trading platform page is not opened in 'Demo account' mode"
      );
    }
  }
}
export default TradingPlatform;
