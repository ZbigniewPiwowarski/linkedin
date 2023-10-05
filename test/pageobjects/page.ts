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

  public get joinLinkedinTitle2() {
    return $("h1*=Join now");
  }

  public async isJoinLinkedinTitleDisplayed() {
    return this.joinLinkedinTitle.isDisplayed();
  }

  // workaround for sometimes Join linkedin page is forced upon user
  public async open(path?: string) {
    if (path != null) {
      await browser.url(`https:/linkedin.com/${path}`);
      await this.waitForWebPageToLoad();
      if (await this.isJoinLinkedinTitleDisplayed()) {
        return browser.url(`https:/linkedin.com/${path}`);
      }
    } else {
      await browser.url(`https:/linkedin.com`);
      await this.waitForWebPageToLoad();
      if (await this.isJoinLinkedinTitleDisplayed()) {
        return browser.url(`https:/linkedin.com`);
      }
    }
  }

  public waitForWebPageToLoad() {
    return browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Webpage was not fully loaded",
      }
    );
  }
}
