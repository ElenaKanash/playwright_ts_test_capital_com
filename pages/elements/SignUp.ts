import { expect } from '@playwright/test';

class SignUp {
  [x: string]: any;
  constructor(page: any) {
    this.page = page;

    //locators
    this.getSignUpForm = page.locator('[class*="modal_modal"]');
    //this.getHeadingForm = page.locator('[class*="modal"] [class*="heading_h3"]');
    this.getHeadingForm = page.locator('span').filter({ hasText: 'Sign up' }); 
    this.getSignUpLoginBtn = page.getByRole('button', { name: 'Login' });
    this.getCloseSignUpBtn = page.locator('div [class*="modal"] [class*="modal_close"]');
    
  }

  //methods
  async verifySignUpForm() { 
    await this.formIsOpened();   
    await this.verifySignUpHeading();
    await this.verifySignUpLoginBtn();
    await this.clickSignUpFormCloseBtn();
  } 

  async formIsOpened() {
    await expect(this.getSignUpForm).toBeVisible();
  }

  async verifySignUpHeading() {
    await expect(this.getHeadingForm).toHaveText('Sign up');
  }

  async verifySignUpLoginBtn() {
    await expect(this.getSignUpLoginBtn).toHaveText('Login');
  }

  async clickSignUpFormCloseBtn() {
    await this.getCloseSignUpBtn.click();
    await expect(this.getSignUpForm).not.toBeVisible();
  }
}

export default SignUp;
