import { Locator, Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { FCA_URL, TradingPlanformURL } from '../helpers/links';
import { USER_DATA } from '../helpers/testData';

class UserRoles {
  readonly page: Page;
  [x: string]: any;
  
  constructor(page: Page) {
    this.page = page;
    //Header login locators  
    this.getHeaderLoginBtn = page.getByRole('button', { name: 'Log In' });
    
    this.getHeaderMyAccountBtn = page.getByRole('link', { name: 'My account' })
    
    //Login Form locators 
    this.getForm = page.locator('[class*="modal_modal"]');
    this.getHeadingForm = page.locator('div [class*="modal"] [class*="heading_h3"]');
    this.getFormSignUpBtn = page.locator('[class*="modal_modal"]').getByRole('button', { name: 'Sign up' });
    this.getFormEmailField = page.getByLabel('Email address');
    
    this.getFormPaswordField = page.getByLabel('Password');
    
    this.getFormForgotPaswordBtn = page.locator('[class*="modal_modal"]').getByRole('button', { name: 'Forgot password?' });
    this.getFormLogMe7days = page.locator('label').filter({ hasText: 'Log me out after 7 days' });
    this.getFormContinueBtn = page.getByRole('button', { name: 'Continue' });
    
    //Trading platform locators
    this.getPlatformAccountBtn = page.locator('menu-button.account');
    this.getPlatformLogoutBtn = page.getByRole('button', { name: 'Logout' });
    this.getModalWindowCloseBtn = page.locator('.modal .icon-square');
  }

  async autorizedUser() {
    await this.clickHeaderLoginBtn();
    await this.fillEmailField();
    await this.fillPasswordField();
    await this.clickFormContinueBtn();
    await this.checkNavigationToPlatform();           
    await this.closePlatformModalWindow();
    //await this.page.goBack();    
    await this.openMainPageFCA();     
    await this.checkMyAccountButton();    
  }

  async unAutorizedUser() {
    await this.clickHeaderLoginBtn();
    await this.fillEmailField();
    await this.fillPasswordField();
    await this.clickFormContinueBtn();
    await this.checkNavigationToPlatform();
    await this.closePlatformModalWindow();
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
    await this.getFormEmailField.fill(USER_DATA.email);
  }
  async fillPasswordField() {
    await this.getFormPaswordField.fill(USER_DATA.password);
  }
  async clickFormContinueBtn() {
    await this.getFormContinueBtn.click();
  }
  async checkNavigationToPlatform() {  
    await this.page.waitForLoadState('networkidle');
    const tradingPlatformTitle = 'Trading Platform | Capital.com'
    await expect(this.page).toHaveTitle(tradingPlatformTitle);
  }
  async closePlatformModalWindow() {
    await this.getModalWindowCloseBtn.click();
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