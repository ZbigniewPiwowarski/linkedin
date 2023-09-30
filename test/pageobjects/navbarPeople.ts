import { $ } from "@wdio/globals";
import Page from "./page.js";

class NavbarPeople extends Page {
  public get navbarPeople() {
    return $(
      'a[data-tracking-control-name="guest_homepage-basic_guest_nav_menu_people"]'
    );
  }

  public get peopleSearchRecord() {
    return $$(".base-search-card__info");
  }

  public get firstNameField() {
    return $('input[name="firstName"]');
  }

  public get lastNameField() {
    return $('input[name="lastName"]');
  }

  public get searchButton() {
    return $('button[aria-label="Search"]');
  }

  public get googleSignInButton() {
    return $(".google-auth-button__placeholder");
  }

  public clickNavbarPeople() {
    return this.navbarPeople.click();
  }

  public clickSearchButton() {
    return this.searchButton.click();
  }

  public clickGoogleSignInButton() {
    return this.googleSignInButton.click();
  }
}

export default new NavbarPeople();
