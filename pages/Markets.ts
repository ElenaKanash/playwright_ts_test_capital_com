class Markets {
  [x: string]: any;
  page: any;

  constructor(page: any) {
    this.page = page;

    //locators
    this.getMarketsTradingBlock = page.locator('.banner_content__l6FZ6');
    //getByRole('button', { name: 'Sign up', exact: true })
    //this.getMarketsTradingBlockSignUpBtn = page.locator('button[data-type="fullscreen_banner_block_btn1_signup"]');
    //this.getMarketsTradingBlockTryDemoBtn = page.locator('[data-type="fullscreen_banner_block_btn2demo"]');
    this.getMarketsTradingBlockSignUpBtn = page.locator('.banner_content__l6FZ6').getByRole('button', { name: 'Sign up' })
    this.getMarketsTradingBlockTryDemoBtn = page.locator('.banner_content__l6FZ6').getByRole('button', { name: 'Try Demo'})
  }

  //methods
  async clickMarketsTradingBlockSignUpBtn() {
    await this.getMarketsTradingBlockSignUpBtn.click();
  }

  async clickMarketsTradingBlockTryDemoBtn() {
    await this.getMarketsTradingBlockTryDemoBtn.click();
  }
}
export default Markets;
