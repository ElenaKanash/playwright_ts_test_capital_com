import { Locator, Page } from '@playwright/test';
import TradingPlatform from "./tradingPlatformPage";
import Login from "./loginPage";
import SignUp from './signUpPage';


export class Assertions {
  readonly page: Page;
  private signUp: SignUp;
  private login: Login;
  private tradingPlatform: TradingPlatform;
  readonly : Locator;

  constructor(page: Page) {
    this.page = page; 
    this.signUp = new SignUp(page);
    this.login = new Login(page); 
    this.tradingPlatform = new TradingPlatform(page); 
  }
  
  async signUpFormIsOpened() {
    await this.signUp.verifySignUpForm()
  }

  async loginFormIsOpened() {
    await this.login.verifyLoginForm();
  }

  async tradingPlatformIsOpened () {    
    await this.tradingPlatform.verifyTradingPlatform();
  }
  
  async tradingPlatformDemoModeIsOpened () {    
    await this.tradingPlatform.verifyTradingPlatformDemoMode() 
  }
  
}