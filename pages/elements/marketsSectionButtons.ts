import { Locator, Page } from '@playwright/test';

export class MarkertTradingBlockSignUpButton {
  readonly page: Page;
  readonly getMarketsTradingBlockSignUpBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getMarketsTradingBlockSignUpBtn = page.locator('button[data-type="fullscreen_banner_block_btn1_signup"]');
  }
  async clickMarkertTradingBlockSignUpButton() {
    await this.getMarketsTradingBlockSignUpBtn.click();
  }
}

export class MarkertTradingBlockTryDemoButton {
  readonly page: Page;
  readonly getMarketsTradingBlockTryDemoBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.getMarketsTradingBlockTryDemoBtn = page.locator('[data-type="fullscreen_banner_block_btn2demo"]');
  }
  async clickMarkertTradingBlockTryDemoButton() {
    await this.getMarketsTradingBlockTryDemoBtn.click();
  }
}

export class MarkertDiscoverBlockCreateAccountButton {
  readonly page: Page;
  readonly getMarkertDiscoverBlockCreateAccountBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.getMarkertDiscoverBlockCreateAccountBtn = page.locator('[data-type="tiles_w_img_btn1_signup"]');
  }
  async clickMarkertDiscoverBlockCreateAccountButton() {
    await this.getMarkertDiscoverBlockCreateAccountBtn.click();
  }
}

export class MarkertDiscoverBlockTryDemoButton {
  readonly page: Page;
  readonly getMarkertDiscoverBlockTryDemoBtn: Locator;
  constructor(page: Page) {
    this.getMarkertDiscoverBlockTryDemoBtn = page.locator('[data-type="tiles_w_img_btn2_demo"]');
  }
  async clickMarkertDiscoverBlockTryDemoButton() {
    await this.getMarkertDiscoverBlockTryDemoBtn.click();
  }
}
