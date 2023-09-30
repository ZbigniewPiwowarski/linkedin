import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  public get joinLinkedinTitle() {
    return $("h1=Join LinkedIn");
  }

  public async isJoinLinkedinTitleDisplayed() {
    return this.joinLinkedinTitle.isDisplayed();
  }

  public async open(path?: string) {
    if (path != null) {
      await browser.url(`https:/linkedin.com/${path}`);
      if (await this.isJoinLinkedinTitleDisplayed()) {
        return browser.url(`https:/linkedin.com/${path}`);
      }
    } else {
      await browser.url(`https:/linkedin.com`);
      if (await this.isJoinLinkedinTitleDisplayed()) {
        return browser.url(`https:/linkedin.com`);
      }
    }
  }
}
