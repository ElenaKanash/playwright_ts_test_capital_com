import { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

class Login {
  readonly page: Page;
  readonly getForm: Locator;
  readonly getHeadingForm: Locator;
  readonly getFormSignUpBtn: Locator;
  readonly getFormEmailField: Locator;
  readonly getFormPaswordField: Locator;
  readonly getFormForgotPaswordBtn: Locator;
  readonly getFormLogMe7days: Locator;
  readonly getFormContinueBtn: Locator;
  readonly getCloseLoginBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getForm = page.locator('[class*="modal_modal"]');
    this.getHeadingForm = page.locator('div [class*="modal"] [class*="heading_h3"]');
    this.getFormSignUpBtn = page.locator('[class*="modal_modal"]').getByRole('button', { name: 'Sign up' });
    this.getFormEmailField = page.getByLabel('Email address');    
    this.getFormPaswordField = page.getByLabel('Password');    
    this.getFormForgotPaswordBtn = page.locator('[class*="modal_modal"]').getByRole('button', { name: 'Forgot password?' });
    this.getFormLogMe7days = page.locator('label').filter({ hasText: 'Log me out after 7 days' });
    this.getFormContinueBtn = page.getByRole('button', { name: 'Continue' });
    this.getCloseLoginBtn = page.locator('div [class*="modal"] [class*="modal_close"]');
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

  async verifyPasswordField() {
    await expect(this.getFormPaswordField).toBeVisible();
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

  async clickFormCloseBtn() {
    await this.getCloseLoginBtn.click();
    await expect(this.getForm).not.toBeVisible();
  }
}
export default Login;
