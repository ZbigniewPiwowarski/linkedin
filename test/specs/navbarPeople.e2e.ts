// import { expect } from "@wdio/globals";
// import Loaders from "../utils/loaders.js";
// import NavbarArticles from "../pageobjects/navbarArticles.js";
// import NavbarPeople from "../pageobjects/navbarPeople.js";
// import * as assert from "assert";
// import { waitForDisplayed } from "webdriverio/build/commands/element.js";

// describe("Navbar people tests", () => {
//   it("should click navbar people", async () => {
//     await Loaders.openHome();
//     await Loaders.waitForWebPageToLoad();

//     await NavbarPeople.clickNavbarPeople();
//     await expect(NavbarPeople.firstNameField).toBeDisplayed();
//     await expect(NavbarPeople.googleSignInButton).toBeDisplayed();
//   });

//   it("should check search bar first name in people section", async () => {
//     await Loaders.openHome();
//     await Loaders.waitForWebPageToLoad();

//     await NavbarPeople.clickNavbarPeople();
//     await expect(NavbarPeople.firstNameField).toBeDisplayed();

//     await NavbarPeople.firstNameField.setValue("John");
//     await expect(NavbarPeople.firstNameField).toHaveValue("John");

//     await NavbarPeople.clickSearchButton();

//     await Loaders.waitForWebPageToLoad();
//     await expect(await NavbarPeople.peopleSearchRecord.length).toBeGreaterThan(
//       0
//     );
//   });

//   it("should check search bar last name in people section", async () => {
//     await Loaders.openHome();
//     await Loaders.waitForWebPageToLoad();

//     await NavbarPeople.clickNavbarPeople();
//     await expect(NavbarPeople.lastNameField).toBeDisplayed();

//     await NavbarPeople.lastNameField.setValue("Doe");
//     await expect(NavbarPeople.lastNameField).toHaveValue("Doe");

//     await NavbarPeople.clickSearchButton();

//     await Loaders.waitForWebPageToLoad();
//     await expect(await NavbarPeople.peopleSearchRecord.length).toBeGreaterThan(
//       0
//     );
//   });
// });
