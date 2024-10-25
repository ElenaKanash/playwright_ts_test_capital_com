import { Locator, Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { FCA_URL, TradingPlanformURL } from '../helpers/links';
import { USER_DATA } from '../helpers/testData';

class UserRoles {
  readonly page: Page;

  readonly getHeaderLoginBtn: Locator;
  readonly getLoginFormEmailField: Locator;
  readonly getLoginFormPaswordField: Locator;
  readonly getLoginFormContinueBtn: Locator;
  readonly getModalWindowCloseBtn: Locator;
  readonly getPlatformAccountBtn: Locator;
  readonly getPlatformLogoutBtn: Locator;
  readonly getHeaderMyAccountBtn: Locator;
  readonly getModalWindowLearnToTradeBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getHeaderLoginBtn = page.getByRole('button', { name: 'Log In' });
    this.getHeaderMyAccountBtn = page.getByRole('link', { name: 'My account' });
    this.getLoginFormEmailField = page.getByLabel('Email address');
    this.getLoginFormPaswordField = page.getByLabel('Password');
    this.getLoginFormContinueBtn = page.getByRole('button', { name: 'Continue' });
    this.getPlatformAccountBtn = page.locator('menu-button.account');
    this.getPlatformLogoutBtn = page.getByRole('button', { name: 'Logout' });
    this.getModalWindowCloseBtn = page.locator('.modal .icon-square');    
    this.getModalWindowLearnToTradeBtn = page.locator('button.solid.default.large .button-text')
  }

  async autorizedUser() {
    await this.clickHeaderLoginBtn();
    await this.fillEmailField();
    await this.fillPasswordField();
    await this.clickFormContinueBtn();
    await this.checkNavigationToPlatform();
    //await this.closePlatformModalWindow();
    await this.closePlatformLearnToTradwWindow();
    await this.openMainPageFCA();
    await this.checkMyAccountButton();
  }

  async unAutorizedUser() {
    await this.clickHeaderLoginBtn();
    await this.fillEmailField();
    await this.fillPasswordField();
    await this.clickFormContinueBtn();
    await this.checkNavigationToPlatform();
    //await this.closePlatformModalWindow();
    await this.closePlatformLearnToTradwWindow();
    await this.clickPlatformAccountBtn();
    await this.clickPlatformLogoutBtn();
    await this.page.waitForLoadState('networkidle');
    await this.openMainPageFCA();
    await this.checkHeaderLoginBtn();
  }

  async clickHeaderLoginBtn() {
    await this.getHeaderLoginBtn.click();
  }

  async fillEmailField() {
    await this.getLoginFormEmailField.fill(USER_DATA.email);
  }

  async fillPasswordField() {
    await this.getLoginFormPaswordField.fill(USER_DATA.password);
  }

  async clickFormContinueBtn() {
    await this.getLoginFormContinueBtn.click();
  }

  async checkNavigationToPlatform() {
    await this.page.waitForLoadState('networkidle');
    const tradingPlatformTitle = 'Trading Platform | Capital.com'
    await expect(this.page).toHaveTitle(tradingPlatformTitle);
  }

  async closePlatformModalWindow() { 
    await this.getModalWindowCloseBtn.isVisible()   
    await this.getModalWindowCloseBtn.click();
  }

  async closePlatformLearnToTradwWindow() {
    await this.getModalWindowLearnToTradeBtn.isVisible()
    await this.getModalWindowLearnToTradeBtn.click();
  }

  async clickPlatformAccountBtn() {
    await this.getPlatformAccountBtn.click();
  }

  async clickPlatformLogoutBtn() {
    await this.getPlatformLogoutBtn.click();
  }

  async openMainPageFCA() {
    await this.page.goto(FCA_URL.FCABasePageUrl);
  }

  async checkHeaderLoginBtn() {
    await expect(this.getHeaderLoginBtn).toBeVisible();
  }

  async checkMyAccountButton() {
    await this.page.waitForLoadState('load');
    await expect(this.getHeaderMyAccountBtn).toBeVisible();
  } 

}

export default UserRoles;