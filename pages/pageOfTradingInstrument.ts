import { Locator, Page } from '@playwright/test';

export class PageOfTradingInstrument {  
  readonly page: Page;
  readonly getAddToFavouriteButton: Locator;
  readonly getLongPositionTooltip : Locator;  
  readonly getLongPositionGoToPlatformButton : Locator;
  readonly getShortPositionTooltip : Locator;
  readonly getShortPositionGoToPlatformButton : Locator;
  readonly getNotificationBellButton : Locator;
  readonly getViewDetailedCharButton : Locator;
  readonly getSellButton : Locator;
  readonly getBuyButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getAddToFavouriteButton = page.getByRole('button', { name: 'Add to favourite' });
    this.getLongPositionTooltip = page.locator('span').filter({ hasText: 'Long position overnight' });
    this.getLongPositionGoToPlatformButton = page.getByRole('cell', { name: 'Long position overnight' }).getByRole('link');
    this.getShortPositionTooltip = page.locator('span').filter({ hasText: 'Short position overnight' });
    this.getShortPositionGoToPlatformButton = page.getByRole('cell', { name: 'Short position overnight' }).getByRole('link');
    this.getNotificationBellButton = page.locator('[data-type="market_alerts"]');
    this.getViewDetailedCharButton = page.getByRole('button', { name: 'View detailed chart' });
    this.getSellButton = page.getByRole('button', { name: 'Sell' })
    this.getBuyButton = page.getByRole('button', { name: 'Buy' })    
  }

  async clickAddToFavouriteButton() {
    await this.getAddToFavouriteButton.click();
  }
}
