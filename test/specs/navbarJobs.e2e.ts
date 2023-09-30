import { expect } from "@wdio/globals";
import Loaders from "../utils/loaders.js";
import NavbarJobs from "../pageobjects/navbarJobs.js";

describe("Navbar jobs tests", () => {
  it("should click navbar jobs", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarJobs.clickNavbarJobs();
    await expect(NavbarJobs.jobsSelect).toBeDisplayed();
  });

  it("should test predefined company filter", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarJobs.clickNavbarJobs();
    await NavbarJobs.companyFilter.click();
    await NavbarJobs.companyFilterFirstRadioButton.click();
    await browser.keys("Enter");

    await Loaders.waitForWebPageToLoad();
    await expect(NavbarJobs.companyFilter).not.toBeDisplayed();
    await expect(await NavbarJobs.jobsSearchResults.length).toBeGreaterThan(0);
  });

  it("should test custom company filter", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarJobs.clickNavbarJobs();
    await NavbarJobs.companyFilter.click();
    await NavbarJobs.companyFilterField.setValue("aa");
    await browser.pause(1000);
    await browser.keys("ArrowDown");
    await browser.keys("Enter");
    await browser.keys("Enter");

    await Loaders.waitForWebPageToLoad();
    await expect(NavbarJobs.companyFilter).not.toBeDisplayed();
    await expect(await NavbarJobs.jobsSearchResults.length).toEqual(0);
    await expect(await NavbarJobs.customAAFilter).toBeDisplayed();
  });

  it("should test search bar in jobs section", async () => {
    await Loaders.openHome();
    await Loaders.waitForWebPageToLoad();

    await NavbarJobs.clickNavbarJobs();
    await NavbarJobs.jobSearchField.setValue("Software Engineer");
    await browser.keys("Enter");

    await Loaders.waitForWebPageToLoad();
    await expect(await NavbarJobs.jobsSearchResults.length).toBeGreaterThan(0);
  });
});
