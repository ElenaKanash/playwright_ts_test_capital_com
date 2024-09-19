import { Locator, Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { FCA_URL, TradingPlanformURL } from '../helpers/links';
import { USER_DATA } from '../helpers/testData';

class Login {
  readonly page: Page;
  [x: string]: any;
  constructor(page: Page) {
    this.page = page;
    //Header login locators  
    this.getHeaderLoginBtn = page.getByRole('button', { name: 'Log In' });
    //this.getHeaderLoginBtn = page.locator('header [data-type="btn_header_login"]'); 
    //this.getHeaderMyAccountLink = page.getByRole('link', { name: 'My account' });
   // this.getHeaderMyAccountBtn = page.locator('header a[href="/trading/platform"]').last();
    this.getHeaderMyAccountBtn = page.getByRole('link', { name: 'My account' })
    //this.getHeaderMyAccountBtn = page.locator('a[data-type="btn_header_my_account"]').last()
    //Login Form locators 
    this.getForm = page.locator('[class*="modal_modal"]');
    this.getHeadingForm = page.locator('div [class*="modal"] [class*="heading_h3"]');
    this.getFormSignUpBtn = page.locator('[class*="modal_modal"]').getByRole('button', { name: 'Sign up' });
    this.getFormEmailField = page.getByLabel('Email address');
    //this.getFormEmailField = page.locator('form #email');
    this.getFormPaswordField = page.getByLabel('Password');
    //this.getFormPaswordField = page.locator('form #password');
    this.getFormForgotPaswordBtn = page.locator('[class*="modal_modal"]').getByRole('button', { name: 'Forgot password?' });
    this.getFormLogMe7days = page.locator('label').filter({ hasText: 'Log me out after 7 days' });
    this.getFormContinueBtn = page.getByRole('button', { name: 'Continue' });
    //this.getFormContinueBtn = page.locator('button[type="submit"]');
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
    await this.page.goBack();
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

  async verifyLoginForm() {
    await this.formIsOpened();
    await this.verifyLoginHeading();
    await this.verifyFormSignUpBtn();
    await this.verifyEmailField();
    await this.verifyPasswordField();
    await this.verifyFormForgotPaswordBtn();
    await this.verifyFormLodMe7days();
    await this.clickFormCloseBtn();
  }

  async formIsOpened() {
    await expect(this.getForm).toBeVisible();
  }

  async verifyLoginHeading() {
    const headingText = await this.getHeadingForm.textContent();
    if (headingText !== 'Login' && headingText === 'Sign up') {
      throw new Error(
        "Bug! Opened a 'Sign up' form  instead of a 'Login' form"
      );
    }
    await expect(this.getHeadingForm).toHaveText('Login');
  }

  async verifyFormSignUpBtn() {
    await expect(this.getFormSignUpBtn).toHaveText('Sign up');
  }

  async verifyEmailField() {
    await expect(this.getFormEmailField).toBeVisible();
  }

  async verifyFormForgotPaswordBtn() {
    await expect(this.getFormForgotPaswordBtn).toBeVisible();
  }

  async verifyFormLodMe7days() {
    await expect(this.getFormLogMe7days).toBeVisible();
  }

  async verifyFormContinueBtn() {
    await expect(this.getFormContinueBtn).toBeVisible();
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
    await this.page.waitForLoadState('load');
    const tradingPlatformTitle = 'Trading Platform | Capital.com'
    await expect.soft(this.page).toHaveTitle(tradingPlatformTitle);

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
    await this.page.waitForLoadState('networkidle');    
    await expect(this.getHeaderMyAccountBtn).toBeVisible();
  }
}
export default Login;
