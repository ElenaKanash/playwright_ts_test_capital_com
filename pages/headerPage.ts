import { Locator, Page } from '@playwright/test';

class Header {
  readonly page: Page;
  readonly getMarketsMenu: Locator;
  readonly getMarketsSharesMenuItem: Locator;
  readonly getMarketsMenuSectionTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    //this.getMarketsMenu = page.locator('header a[href="/en-gb/markets"]');
    this.getMarketsMenu = page.locator('span').filter({ hasText: 'Markets' }).getByRole('link');
    //this.getMarketsSharesSubMenu = page.locator('header a[href="/en-gb/markets/shares"]');
    this.getMarketsSharesMenuItem = page.locator('header').getByRole('link', { name: 'Shares' });
    this.getMarketsMenuSectionTitle = page.getByRole('link', { name: 'Markets', exact: true }).first() 
  }

  async hoverMarketsMenu() {
    await this.getMarketsMenu.hover();
  }

  async clickMarketsSharesMenuItem() {
    await this.getMarketsSharesMenuItem.click();
  }

  async clickMarketsMenuSectionTitle() {
    await this.getMarketsMenuSectionTitle.click();
  }
}

export default Header;
