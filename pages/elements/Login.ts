import { test, expect } from '@playwright/test';

import { FCA_URL, PLATFORM_URL } from '../../helpers/links';

import { USER_DATA } from '../../helpers/testData';

class Login {
  [x: string]: any;
  constructor(page) {
    this.page = page;
    //locators
    /*/ /Header login locators

    this.getHeaderLoginBtn = page.locator('header [data-type="btn_header_login"]');  */
    this.getHeaderMyAccountBtn = page
      .locator('header a[href="/trading/platform"]')
      .last();

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
    this.getFormEmailField = page.getByLabel('Email address');
    this.getFormPaswordField = page.getByLabel('Password');
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
    await this.getHeaderMyAccountBtn.waitFor({ state: 'visible' });
    //await this.page.waitForSelector('div [class*="accountBtns_btnsPlace"] a[href="/trading/platform"]', { state: 'visible' });
    // await this.page.waitForSelector('header a[href="/trading/platform"]:last-child', { state: 'visible' });
    await expect(this.getHeaderMyAccountBtn).toBeVisible();
  }
}
export default Login;
