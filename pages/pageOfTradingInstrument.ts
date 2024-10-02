import { Locator, Page, expect } from '@playwright/test';

export class PageOfTradingInstrument {
  readonly page: Page;
  readonly getAddToFavouriteButton: Locator;
  readonly getLongPositionTooltip: Locator;
  readonly getLongPositionGoToPlatformButton: Locator;
  readonly getShortPositionTooltip: Locator;
  readonly getShortPositionGoToPlatformButton: Locator;
  readonly getNotificationBellButton: Locator;
  readonly getViewDetailedCharButton: Locator;
  readonly getSellButton: Locator;
  readonly getBuyButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getAddToFavouriteButton = page.getByRole('button', { name: 'Add to favourite' });   
    this.getLongPositionTooltip = page.locator('[class*="overnight-fee"]').first();
    this.getLongPositionGoToPlatformButton = page.locator('[data-type="market_go_to_platform_btn"]').first();
    this.getShortPositionTooltip = page.locator('span').filter({ hasText: 'Short position overnight' });
    this.getShortPositionGoToPlatformButton = page.getByRole('cell', { name: 'Short position overnight' }).getByRole('link');
    this.getNotificationBellButton = page.locator('[data-type="market_alerts"]');
    this.getViewDetailedCharButton = page.getByRole('button', { name: 'View detailed chart' });
    this.getSellButton = page.getByRole('button', { name: 'Sell' })
    this.getBuyButton = page.getByRole('button', { name: 'Buy' })
  }

  async clickAddToFavouriteButton() {
    await expect(this.getAddToFavouriteButton).toBeVisible();
    await this.getAddToFavouriteButton.click();
  }

  async clickLongPositionTooltip() {
    await expect(this.getLongPositionTooltip).toBeVisible({ timeout: 6000 });
    await this.getLongPositionTooltip.hover();
    await expect(this.getLongPositionGoToPlatformButton).toBeVisible();
    // await this.getLongPositionGoToPlatformButton.click();
    // await this.getLongPositionGoToPlatformButton.dispatchEvent('click');
    await this.page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.click();
      }
    }, '[data-type="market_go_to_platform_btn"]');
  }


}
