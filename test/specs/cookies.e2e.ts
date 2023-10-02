import { expect } from "@wdio/globals";
import Cookies from "../pageobjects/cookies.js";
import Loaders from "../utils/loaders.js";
import * as assert from "assert";

describe("Cookies tests", () => {
  it("should open home page and check cookies policy link", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();
    await Cookies.clickCookiePolicyLink();

    await expect(Cookies.cookiePolicyLinkTextH1).toBeDisplayed();
  });

  // This test check if cookies settings toggle works
  it("should switch on cookies permission in cookies settings and check if cookies banner is not displayed", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();
    await Cookies.clickCookieSettingsLink();

    await Cookies.clickCookieToggle();

    await Loaders.openHomeNoSessionReloading();
    await Loaders.waitForWebPageToLoad();
    assert.strictEqual(
      await Cookies.cookieBannerAccept.isDisplayed(),
      false,
      "Cookies banner is still displayed after switching it off"
    );
  });
});
