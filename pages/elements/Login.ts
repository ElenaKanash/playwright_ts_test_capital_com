import { test, expect } from '@playwright/test';
import { FCA_URL, PLATFORM_URL } from '../../helpers/links';
import { USER_DATA } from '../../helpers/testData';
import TradingPlatform from './../Trading.platform';

class Login {
  [x: string]: any;
  constructor(page) {
    this.page = page;    
    //locators
    /*/ /Header login locators

    this.getHeaderLoginBtn = page.locator('header [data-type="btn_header_login"]');  */
    this.getHeaderMyAccountBtn = page.locator('header a[href="/trading/platform"]').last();

    //Header login locators for English language
    this.getHeaderLoginBtn = page.getByRole('button', { name: 'Log In' });
    this.getHeaderMyAccountLink = page.getByRole('link', {
      name: 'My account',
    });

    /*  //Login Form locators for all language
        this.getFormEmailField = page.locator('form #email');
    this.getFormPaswordField = page.locator('form #password');
    this.getFormContinueBtn = page.locator('button[type="submit"]'); */

    //Login Form locators for English language
    this.getForm = page.locator('[class*="modal_modal"]');
    this.getHeadingForm = page.locator('div [class*="modal"] [class*="heading_h3"]');
    this.getFormSignUpBtn = page.locator('[class*="modal_modal"]').getByRole('button', { name: 'Sign up' });  
    this.getFormEmailField = page.getByLabel('Email address');
    this.getFormPaswordField = page.getByLabel('Password');
    this.getFormForgotPaswordBtn = page.locator('[class*="modal_modal"]').getByRole('button', { name: 'Forgot password?' });
    this.getFormLogMe7days = page.locator('label').filter({ hasText: 'Log me out after 7 days' });   
    this.getFormContinueBtn = page.getByRole('button', { name: 'Continue' });

    //Trading platform locators
    this.getPlatformAccountBtn = page.getByText('live', { exact: true });
    this.getPlatformLogoutBtn = page.getByRole('button', { name: 'Logout' });
  }

  //methods for English language
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

    await this.clickPlatformAccountBtn();
    await this.clickPlatformLogoutBtn();
    await this.page.waitForNavigation();
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
   // await expect(this.getHeadingForm).toHaveText('Login');
     const headingText = await this.getHeadingForm.textContent();
    if (headingText!== 'Login' && headingText === 'Sign up') {
      throw new Error("Bug! Opened a 'Sign up' form  instead of a 'Login' form");
    } 
  }

  async verifyFormSignUpBtn() {
    await expect(this.getFormSignUpBtn).toHaveText('Sign up');
  }

  async verifyEmailField(){
    await expect(this.getFormEmailField).toBeVisible();
  }

  async verifyFormForgotPaswordBtn(){
    await expect(this.getFormForgotPaswordBtn).toBeVisible();
  }

  async verifyFormLodMe7days(){
    await expect(this.getFormLogMe7days).toBeVisible();
  }

  async verifyFormContinueBtn(){
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
    await this.page.waitForNavigation();
    await expect(this.page).toHaveURL(PLATFORM_URL.platformBaseUrl);
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
export default Login;
