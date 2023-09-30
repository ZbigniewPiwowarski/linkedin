// import { expect } from "@wdio/globals";
// import Loaders from "../utils/loaders.js";
// import NavbarArticles from "../pageobjects/navbarArticles.js";
// import NavbarLearning from "../pageobjects/navbarLearning.js";
// import * as assert from "assert";
// import { waitForDisplayed } from "webdriverio/build/commands/element.js";
// import navbarPeople from "../pageobjects/navbarPeople.js";

// describe.skip("Navbar learning tests", () => {
//   it("should click navbar learning", async () => {
//     await Loaders.openHome();
//     await Loaders.waitForWebPageToLoad();

//     await NavbarLearning.clickNavbarLearning();
//     await expect(NavbarLearning.navbarLearningTitle).toBeDisplayed();
//   });

//   it("should test level filter", async () => {
//     await Loaders.openHome();
//     await Loaders.waitForWebPageToLoad();

//     await NavbarLearning.clickNavbarLearning();
//     (await NavbarLearning.levelFilter).waitForClickable();
//     await NavbarLearning.levelFilter.click();
//     await NavbarLearning.levelFilterBeginner.click();
//     await browser.keys("Enter");

//     await expect(NavbarLearning.beginnerFilterApplied).toBeDisplayed();

//     await expect(
//       await NavbarLearning.learningSearchRecord.length
//     ).toBeGreaterThan(0);

//     await NavbarLearning.filtersResetButton.click();
//     await expect(NavbarLearning.beginnerFilterApplied).not.toBeDisplayed();
//   });

//   it("should test search bar in learning section", async () => {
//     await Loaders.openHome();
//     await Loaders.waitForWebPageToLoad();

//     await NavbarLearning.clickNavbarLearning();

//     await NavbarLearning.searchSkillsField.waitForClickable();
//     await NavbarLearning.searchSkillsField.setValue("Javascript");
//     await expect(NavbarLearning.searchSkillsField).toHaveValue("Javascript");

//     await browser.keys("Enter");

//     await Loaders.waitForWebPageToLoad();
//     await expect(
//       await NavbarLearning.learningSearchRecord.length
//     ).toBeGreaterThan(0);
//   });
// });
