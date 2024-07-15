import { FCA_URL } from '../helpers/links';

class HomePage {
  page: any;
  AcceptAllCookiesBtn: any;
  constructor(page: any) {
    this.page = page;

    //locators
    this.AcceptAllCookiesBtn = page.locator('#onetrust-accept-btn-handler');
  }

  //methods
  async openMainPageFCA() {
    await this.page.goto(FCA_URL.FCABasePageUrl);
  }
  async clickAcceptAllCookiesBtn() {
    await this.AcceptAllCookiesBtn.click();
  }
}
export default HomePage;
