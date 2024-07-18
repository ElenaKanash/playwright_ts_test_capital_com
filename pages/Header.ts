class Header {
  [x: string]: any;
  page: any;

  constructor(page: any) {
    this.page = page;

    //locators
    //this.getMarketsMenu = page.locator('header a[href="/en-gb/markets"]');  
    this.getMarketsMenu = page.locator('span').filter({ hasText: 'Markets' }).getByRole('link');
    //this.getMarketsSharesSubMenu = page.locator('header a[href="/en-gb/markets/shares"]');
    this.getMarketsSharesMenuItem = page.locator('header').getByRole('link', { name: 'Shares' });
  }

  //methods
  async hoverMarketsMenu() {
    await this.getMarketsMenu.hover();
  }

  async clickMarketsSharesMenuItem() {
    await this.getMarketsSharesMenuItem.click();
  }
}
export default Header;
