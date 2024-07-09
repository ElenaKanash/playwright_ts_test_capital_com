import { FCA_URL } from "../helpers/links";


export 

class HomePage {
  page: any;
  constructor(page: any) {
    this.page = page;

    //locators 
  }

  //methods
  async openMainPageFCA() {
    await this.page.goto(FCA_URL.FCABasePageUrl);
  }


}
export default HomePage