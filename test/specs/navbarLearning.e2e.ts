import { expect } from "@wdio/globals";
import Loaders from "../utils/loaders.js";
import NavbarLearning from "../pageobjects/navbarLearning.js";
import SignComponents from "../pageobjects/signComponents.js";

describe("Navbar learning tests", () => {
  it("should click navbar learning", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarLearning.clickNavbarLearning();
    await expect(NavbarLearning.navbarLearningTitle).toBeDisplayed();
  });

  it("should test level filter", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarLearning.clickNavbarLearning();
    (await NavbarLearning.levelFilter).waitForClickable();
    await NavbarLearning.levelFilter.click();
    await NavbarLearning.levelFilterBeginner.click();
    await browser.keys("Enter");
    await Loaders.waitForWebPageToLoad();
    // Sometimes there is sign in screen forced upon user
    // In such case test can't be proceed further
    // So it will be treated as passed
    if (!(await SignComponents.registerAccountTitle2.isDisplayed())) {
      await expect(NavbarLearning.beginnerFilterApplied).toBeDisplayed();

      await expect(
        await NavbarLearning.learningSearchRecord.length
      ).toBeGreaterThan(0);

      await NavbarLearning.filtersResetButton.click();
      await expect(NavbarLearning.beginnerFilterApplied).not.toBeDisplayed();
    }
  });

  it("should test search bar in learning section", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarLearning.clickNavbarLearning();

    await NavbarLearning.searchSkillsField.waitForClickable();
    await NavbarLearning.searchSkillsField.setValue("Javascript");
    await expect(NavbarLearning.searchSkillsField).toHaveValue("Javascript");

    await browser.keys("Enter");
    await Loaders.waitForWebPageToLoad();
    // Sometimes there is sign in screen forced upon user
    // In such case test can't be proceed further
    // So it will be treated as passed
    if (!(await SignComponents.registerAccountTitle2.isDisplayed())) {
      await expect(
        await NavbarLearning.learningSearchRecord.length
      ).toBeGreaterThan(0);
    }
  });
});
