import { expect, Locator, Page } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

class TableTradingInstruments {
  readonly page: Page;
  readonly getOptionList: Locator;
  readonly getSortDropdown: Locator;
  readonly getTableRow: Locator;
  readonly getPageInstrumentHeading: Locator;
  readonly getPageInstrunentLink: Locator;
  rowHeadingText: string;

  constructor(page: Page) {
    this.page = page;
    this.getOptionList = page.locator('[class*="dropdown_option"]');
    this.getSortDropdown = page.locator('#Sort');
    this.getTableRow = page.locator('[data-type="markets_list_deep"]').locator('[class*="row_link"]');
    //this.getPageInstrumentHeading = page.locator('[class*="heading_h1"]');
    this.getPageInstrumentHeading = page.locator('h1');
    this.getPageInstrunentLink = page.locator('a[class*="row_link"]');
  }

  async clickRandomInstrumentInTheSortedTable() {
    const dropdownSortOoptions = [
      'Top fallers',
      'Most traded',
      'Top risers',
      'Most volatile',
    ];

    for (let item of dropdownSortOoptions) {
      await this.clickSortDropdown();
      await this.getOptionList.filter({ hasText: item }).click();
      await this.page.waitForTimeout(1000);
      await this.clickrandomRow();

      await expect(this.getPageInstrumentHeading).toContainText(
        this.rowHeadingText
      );
      const pageInstrumentTitle = await this.page.title();
      expect(pageInstrumentTitle).toContain(this.rowHeadingText);

      await this.page.goBack();
    }
  }

  async clickSortDropdown() {
    await this.getSortDropdown.scrollIntoViewIfNeeded();
    await this.getSortDropdown.click();
  }

  async clickrandomRow() {
    await this.page.waitForSelector('[class*="row_link"]');
    const randomRow = await this.getRandomRow();
    this.rowHeadingText = await randomRow.innerText();
    console.log(`selected trading instrument: ${this.rowHeadingText}`);
    await randomRow.click();
  }

  async saveAllTableInstrumentLinksToFile(page: any, locator: string, fileName: string) {
    await page.waitForSelector('a[class*="row_link"]');
    //expect(this.getPageInstrunentLink).toHaveCount(10)
    
    const links = await this.getPageInstrunentLink.all();
    for (const link of links) {
      const href = await link.getAttribute('href');
    }
    const linksText = (await Promise.all(links.map(async (link) => await link.getAttribute('href')))).join('\n');    
    //const filePath ='linksFromTradingInstrumentWidget.txt';
    const filePath = './helpers/linksFromTradingInstrumentWidget.txt';
    
    fs.writeFileSync(filePath, linksText);
    console.log(`Saved ${links.length} links to ${filePath}`);
  }

  private async getRandomRow() {
    const rows = await this.getTableRow.all();
    const randomIndex = Math.floor(Math.random() * Math.min(rows.length, 10));
    return rows[randomIndex];
  }
}

export default TableTradingInstruments;
