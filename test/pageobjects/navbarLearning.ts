import { $ } from "@wdio/globals";
import Page from "./page.js";

class NavbarLearning extends Page {
  public get navbarLearning() {
    return $(
      'a[data-tracking-control-name="guest_homepage-basic_guest_nav_menu_learning"]'
    );
  }

  public get learningSearchRecord() {
    return $$(
      "a[data-tracking-control-name=learning-serp_learning-search-card_search-card]"
    );
  }

  public get searchSkillsField() {
    return $('input[aria-label*="Search skills"]');
  }

  public get searchButton() {
    return $('button[aria-label="Search"]');
  }

  public get levelFilter() {
    return $(
      "button[data-tracking-control-name=learning-serp_filters_difficultyLevel]"
    );
  }

  public get levelFilterBeginner() {
    return $("#difficultyLevel-0");
  }

  public get levelFilterDoneButton() {
    return $(".filter__submit-button");
  }

  public get filtersResetButton() {
    return $(".reset-filters-button__button");
  }

  public get beginnerFilterApplied() {
    return $("button=Beginner");
  }

  public get navbarLearningTitle() {
    return $("h1=Browse most popular courses");
  }

  public clickNavbarLearning() {
    return this.navbarLearning.click();
  }

  public clickSearchButton() {
    return this.searchButton.click();
  }
}

export default new NavbarLearning();
