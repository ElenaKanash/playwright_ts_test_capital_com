import { expect, Locator, Page } from '@playwright/test';

class TableTradingInstruments {
  readonly page: Page;
  readonly getOptionList: Locator;
  readonly getSortDropdown: Locator;
  readonly getTableRow: Locator;
  readonly getPageInstrumentHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getOptionList = page.locator('[class*="dropdown_option"]');
    this.getSortDropdown = page.locator('#Sort');
    this.getTableRow = page.locator('[data-type="markets_list_deep"]').locator('[class*="row_link"]');
    //this.getPageInstrumentHeading = page.locator('[class*="heading_h1"]');
    this.getPageInstrumentHeading = page.locator('h1');
  }

  async clickRandomInstrumentInTheSortedTable() { 
    const dropdownSorOoptions = ['Top fallers', 'Most traded', 'Top risers', 'Most volatile'];

    for (let item of dropdownSorOoptions) {
      await this.getSortDropdown.scrollIntoViewIfNeeded();
      await this.getSortDropdown.click();
      await this.getOptionList.filter({ hasText: item }).click();
      await this.page.waitForTimeout(1000);

      const randomRow = await this.getRandomRow();
      const rowHeadingText = await randomRow.innerText();
      console.log(`selected trading instrument: ${rowHeadingText}`);      
      await randomRow.click();
      //await this.page.waitForLoadState('networkidle');
      
      await expect(this.getPageInstrumentHeading).toContainText(rowHeadingText);
      
      await this.page.goBack();
    }
  }

  private async getRandomRow() {
    const rows = await this.getTableRow.all();
    const randomIndex = Math.floor(Math.random() * Math.min(rows.length, 10));
    return rows[randomIndex];
  }
}

export default TableTradingInstruments