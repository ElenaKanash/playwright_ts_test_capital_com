import { Page } from '@playwright/test';

export class MarkertTradingBlockSignUpBtn {
  [x: string]: any;
  page: any;
  constructor(page: any) {
    this.page = page;
    this.getMarketsTradingBlockSignUpBtn = page.locator('button[data-type="fullscreen_banner_block_btn1_signup"]');
  }

  async clickMarkertTradingBlockSignUpButton() {
    await this.getMarketsTradingBlockSignUpBtn.click();
  }
}

export class MarkertTradingBlockTryDemoBtn {
  [x: string]: any;
  page: any;
  constructor(page: any) {
    this.page = page;
    this.getMarketsTradingBlockTryDemoBtn = page.locator('[data-type="fullscreen_banner_block_btn2demo"]');
  }

  async clickMarkertTradingBlockTryDemoButton() {
    await this.getMarketsTradingBlockTryDemoBtn.cilck();
  }
}

  export class MarkertDiscoverBlockCreateAccountBtn {
  [x: string]: any;
  page: any;
  constructor(page: any) {
    this.page = page;
    this.getMarkertDiscoverBlockCreateAccountBtn = page.locator('[data-type="tiles_w_img_btn1_signup"]');
  } 

  async  clickMarkertDiscoverBlockCreateAccountBtn() {
    await this.getMarkertDiscoverBlockCreateAccountBtn().click()
  }  
}

export class MarkertDiscoverBlockTryDemoBtn {
  [x: string]: any;
  page: any;
  constructor(page: any) {
  this.getMarkertDiscoverBlockTryDemoBtn = page.locator('[data-type="tiles_w_img_btn2_demo"]');
  }

  async clickMarkertDiscoverBlockTryDemoBtn() {
    await this.getMarkertDiscoverBlockTryDemoBtn().click()
  } 
  
} 
