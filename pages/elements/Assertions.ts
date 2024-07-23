import SignUp from "./SignUp"

class Assertions {
  [x: string]: any;
  page: any;

  constructor(page: any, signUp: SignUp) {
    this.page = page;
    this.signUp = signUp;
  }

  async SignUpFormIsOpened() {   
    await this.signUp.formIsOpened();
    await this.signUp.VerifySignUpHeading();
    await this.signUp.VerifySignUpLoginBtn();
    await this.signUp.clickSignUpFormCloseBtn();
  }

}
export default Assertions