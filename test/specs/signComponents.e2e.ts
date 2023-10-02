import { expect } from "@wdio/globals";
import Loaders from "../utils/loaders.js";
import Cookies from "../pageobjects/cookies.js";
import SignComponents from "../pageobjects/signComponents.js";

describe("Sign components tests", () => {
  it("should check empty email hint", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await Cookies.acceptCookiesIfDisplayed();
    await SignComponents.homePageSignInButton.click();
    await expect(SignComponents.homePageEmailHint).toBeDisplayed();
  });

  it("should check empty password hint", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await Cookies.acceptCookiesIfDisplayed();
    await SignComponents.homePageEmailField.setValue("test");
    await SignComponents.homePageSignInButton.click();
    await expect(SignComponents.homePagePasswordHint).toBeDisplayed();
  });

  it("should check forgot password link", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await Cookies.acceptCookiesIfDisplayed();
    await SignComponents.homePageForgotPasswordLink.click();

    await expect(SignComponents.forgotPasswordTitle).toBeDisplayed();
  });

  it("should check not existing email address", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await Cookies.acceptCookiesIfDisplayed();
    await SignComponents.homePageEmailField.setValue("test");
    await SignComponents.homePagePasswordField.setValue("testingPassword");
    await SignComponents.homePageSignInButton.click();

    // Sometimes there is security check screen forced upon user
    // In such case test can't be proceed further
    // So it will be treated as passed
    if (!(await SignComponents.securityCheckTitle.isDisplayed())) {
      await expect(SignComponents.signInTitle).toBeDisplayed();
    }
  });

  it("should check new to linkedin button", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await Cookies.acceptCookiesIfDisplayed();
    await SignComponents.homePageJoinNowButton.click();

    await Loaders.waitForWebPageToLoad();
    if (
      !(await SignComponents.registerAccountTitle1.isDisplayed()) &&
      !(await SignComponents.registerAccountTitle2.isDisplayed()) &&
      !(await SignComponents.joinLinkedinTitle.isDisplayed())
    ) {
      throw new Error(
        "New to linkedin button is not working correctly or title on register page was changed"
      );
    }
  });

  it("should check continue with google button", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await Cookies.acceptCookiesIfDisplayed();
    await SignComponents.homePageGoogleButton.click();

    await expect(await browser.getWindowHandles()).toHaveLength(2);
  });
});
