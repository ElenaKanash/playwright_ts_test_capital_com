import { Page } from '@playwright/test';

export class MarkertTradingBlockSignUpButton{ 
  page: Page;
  getMarketsTradingBlockSignUpBtn: any;
  constructor(page: Page) {
    this.page = page;
    this.getMarketsTradingBlockSignUpBtn = page.locator('button[data-type="fullscreen_banner_block_btn1_signup"]');
  }

  async clickMarkertTradingBlockSignUpButton() {
    await this.getMarketsTradingBlockSignUpBtn.click();
  }
}

export class MarkertTradingBlockTryDemoButton{  
  page: Page;
  getMarketsTradingBlockTryDemoBtn: any;
  constructor(page: Page) {
    this.page = page;
    this.getMarketsTradingBlockTryDemoBtn = page.locator('[data-type="fullscreen_banner_block_btn2demo"]');
  }

  async clickMarkertTradingBlockTryDemoButton() {
    await this.getMarketsTradingBlockTryDemoBtn.click();
  }
}

  export class MarkertDiscoverBlockCreateAccountButton {
  [x: string]: any;
  page: any;
  constructor(page: any) {
    this.page = page;
    this.getMarkertDiscoverBlockCreateAccountBtn = page.locator('[data-type="tiles_w_img_btn1_signup"]');
  } 

  async  clickMarkertDiscoverBlockCreateAccountButton() {
    await this.getMarkertDiscoverBlockCreateAccountBtn().click()
  }  
}

export class MarkertDiscoverBlockTryDemoButton {
  [x: string]: any;
  page: any;
  constructor(page: any) {
  this.getMarkertDiscoverBlockTryDemoBtn = page.locator('[data-type="tiles_w_img_btn2_demo"]');
  }

  async clickMarkertDiscoverBlockTryDemoButton() {
    await this.getMarkertDiscoverBlockTryDemoBtn().click()
  } 
  
} 
