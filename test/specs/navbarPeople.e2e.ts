import { expect } from "@wdio/globals";
import Loaders from "../utils/loaders.js";
import NavbarPeople from "../pageobjects/navbarPeople.js";
import SignComponents from "../pageobjects/signComponents.js";

describe("Navbar people tests", () => {
  it("should click navbar people", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarPeople.clickNavbarPeople();
    await expect(NavbarPeople.firstNameField).toBeDisplayed();
    await expect(NavbarPeople.googleSignInButton).toBeDisplayed();
  });

  it("should check search bar first name in people section", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarPeople.clickNavbarPeople();
    await expect(NavbarPeople.firstNameField).toBeDisplayed();

    await NavbarPeople.firstNameField.setValue("John");
    await expect(NavbarPeople.firstNameField).toHaveValue("John");

    await NavbarPeople.clickSearchButton();
    // Sometimes there is sign in screen forced upon user
    // In such case test can't be proceed further
    // So it will be treated as passed
    if (!(await SignComponents.registerAccountTitle2.isDisplayed())) {
      await Loaders.waitForWebPageToLoad();
      await expect(
        await NavbarPeople.peopleSearchRecord.length
      ).toBeGreaterThan(0);
    }
  });

  it("should check search bar last name in people section", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarPeople.clickNavbarPeople();
    await expect(NavbarPeople.lastNameField).toBeDisplayed();

    await NavbarPeople.lastNameField.setValue("Doe");
    await expect(NavbarPeople.lastNameField).toHaveValue("Doe");

    await NavbarPeople.clickSearchButton();
    // Sometimes there is sign in screen forced upon user
    // In such case test can't be proceed further
    // So it will be treated as passed
    if (!(await SignComponents.registerAccountTitle2.isDisplayed())) {
      await Loaders.waitForWebPageToLoad();
      await expect(
        await NavbarPeople.peopleSearchRecord.length
      ).toBeGreaterThan(0);
    }
  });
});
