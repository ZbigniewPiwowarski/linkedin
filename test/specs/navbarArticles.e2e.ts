// import { expect } from "@wdio/globals";
// import Loaders from "../utils/loaders.js";
// import NavbarArticles from "../pageobjects/navbarArticles.js";
// import NavbarPeople from "../pageobjects/navbarPeople.js";
// import * as assert from "assert";
// import { waitForDisplayed } from "webdriverio/build/commands/element.js";

// describe("Navbar articles tests", () => {
//   it.skip("should click navbar articles", async () => {
//     await Loaders.openHome();
//     await Loaders.waitForWebPageToLoad();

//     await NavbarArticles.clickNavbarArticles();
//     await expect(NavbarArticles.articlesPageTitle).toBeDisplayed();
//   });

//   /* 
//    This test check marketing or engineering box link
//    Because webpage can be modified if there is not marketing or engineering box
//    Test will be failed but treat it as skipped test then
//   */
//   it.skip("should click marketing box link or engineering box link", async () => {
//     await Loaders.openHome();
//     await Loaders.waitForWebPageToLoad();

//     await NavbarArticles.clickNavbarArticles();

//     await browser.waitUntil(
//       () =>
//         NavbarArticles.engineeringBox.isDisplayed() ||
//         NavbarArticles.marketingBox.isDisplayed(),
//       {
//         timeout: 5 * 1000,
//         timeoutMsg:
//           "Marketing and Engineering boxes are not displayed, don't treat this as a failed test but skipped rather",
//       }
//     );

//     if (await NavbarArticles.marketingBox.isDisplayed()) {
//       await NavbarArticles.marketingBox.click();
//       await expect(NavbarArticles.marketingPageTitle).toBeDisplayed();
//     } else if (await NavbarArticles.engineeringBox.isDisplayed()) {
//       await NavbarArticles.engineeringBox.click();
//       await expect(NavbarArticles.engineeringPageTitle).toBeDisplayed();
//     }
//   });
// });
