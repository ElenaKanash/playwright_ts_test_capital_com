import { test, expect } from '@playwright/test';

import { PLATFORM_URL } from '../../helpers/links';
import { USER_DATA } from '../../helpers/testData';

class Login {
  [x: string]: any;
  constructor(page) {
    this.page = page;
    //locators
    /*/ /Header login locators
    this.getHeaderLoginBtn = page.locator('header [data-type="btn_header_login"]');    
    this.getHeaderMyAccountBtn = page.locator('div [class*="accountBtn"] a[href="/trading/platform"]');  */

    //Header login locators for English language
    this.getHeaderLoginBtn = page.getByRole('button', { name: 'Log In' });
    this.getHeaderMyAccountLink = page.getByRole('link', { name: 'My account' });

    /*  //Login Form locators for all language
        this.getFormEmailField = page.locator('form #email');
    this.getFormPaswordField = page.locator('form #password');
    this.getFormContinueBtn = page.locator('button[type="submit"]'); */

    //Login Form locators for English language
    this.getFormEmailField = page.getByLabel('Email address');
    this.getFormPaswordField = page.getByLabel('Password');
    this.getFormContinueBtn = page.getByRole('button', { name: 'Continue' });
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

  async checkMyAccountButton() {
    await expect(this.getHeaderMyAccountLink).toBeVisible();
  }
}
export default Login;
