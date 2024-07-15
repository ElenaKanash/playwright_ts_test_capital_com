class Markets {
  [x: string]: any;
  page: any;

  constructor(page: any) {
    this.page = page;

    //locators
    this.getMarketsTradingBlock = page.locator('.banner_content__l6FZ6');
    this.getMarketsTradingBlockSignUpBtn = page.locator('button[data-type="fullscreen_banner_block_btn1_signup"]');
  }

  //methods
  async clickMarketsTradingBlockSignUpBtn() {
    await this.getMarketsTradingBlockSignUpBtn.click();
  }
}
export default Markets;
