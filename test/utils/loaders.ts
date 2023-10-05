import { $ } from "@wdio/globals";
import Page from "../pageobjects/page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Loaders extends Page {
  /**
   * define selectors using getter methods
   */

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  /**
   * overwrite specific options to adapt it to page object
   */
  public async openHome() {
    await browser.reloadSession();
    await super.open();
  }

  public async openHomeNoSessionReloading() {
    return super.open();
  }

}

export default new Loaders();
