import { $ } from "@wdio/globals";
import Page from "./page.js";
import Loaders from "../utils/loaders.js";

class NavbarJobs extends Page {
  public get navbarJobs() {
    return $(
      'a[data-tracking-control-name="guest_homepage-basic_guest_nav_menu_jobs"]'
    );
  }

  public get jobsSelect() {
    return $("span=Jobs");
  }

  public get companyFilter() {
    return $("button=Company");
  }

  public get customAAFilter() {
    return $("button=AA");
  }

  public get companyFilterFirstRadioButton() {
    return $("#f_C-0");
  }

  public get jobsSearchResults() {
    return $$(
      'a[data-tracking-control-name="public_jobs_jserp-result_search-card"]'
    );
  }

  public get filtersResetButton() {
    return $(".reset-filters-button__button");
  }

  public get companyFilterField() {
    return $('input[aria-label="Add a filter"]');
  }

  public get jobSearchField() {
    return $('input[aria-label="Search job titles or companies"]');
  }

  public async clickNavbarJobs() {
    await this.navbarJobs.click();

    // workaround for sometimes when click this button, it will show "join linkedIN" page
    await browser.pause(1000);
    if (await super.isJoinLinkedinTitleDisplayed()) {
      await Loaders.openHome();
      await this.navbarJobs.click();
    }
  }
}

export default new NavbarJobs();
